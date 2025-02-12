export const addClassNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
};


export const validatePrivateKey = (key: string, currency: string) => {
    // Trim whitespace and normalize input
    const normalizedKey = key.trim();
    let regex: RegExp;
    let errorMessage = "";
    
    switch (currency.toUpperCase()) {  // Case-insensitive currency matching
        case 'BTC':
            // Bitcoin private key formats:
            // 1. WIF uncompressed (5): 51 chars
            // 2. WIF compressed (K,L): 52 chars
            // 3. Hex format: 64 chars
            // 4. Mini private key format: 30 chars
            regex = /^([5KL][1-9A-HJ-NP-Za-km-z]{50,51}|[1-9A-HJ-NP-Za-km-z]{51,52}|[a-fA-F0-9]{64}|S[1-9A-HJ-NP-Za-km-z]{21,29})$/;
            errorMessage = "Invalid Bitcoin (BTC) private key format. Accepted formats: WIF (compressed/uncompressed), hex, or mini private key format.";
            break;
            
        case 'ETH':
        case 'USDT':
        case 'BASE':
        case 'POLYGON':
            // Ethereum and EVM private key formats:
            // 1. Raw hex (64 chars)
            // 2. Hex with 0x prefix (66 chars)
            // 3. Mnemonic-derived (64 chars)
            // 4. Geth keystore format check
            const isValidEVMKey = (k: string) => {
                // Check for standard hex format
                if (/^(0x)?[a-fA-F0-9]{64}$/.test(k)) return true;
                
                // Check for potential keystore JSON format
                try {
                    const parsed = JSON.parse(k);
                    return parsed.version && 
                           parsed.crypto && 
                           parsed.crypto.cipher && 
                           parsed.crypto.ciphertext;
                } catch {
                    return false;
                }
            };
            
            if (!isValidEVMKey(normalizedKey)) {
                errorMessage = "Invalid Ethereum-based private key format. Accepted formats: 64 hex chars (with optional '0x' prefix) or valid keystore JSON.";
                return errorMessage;
            }
            return "";
            
        case 'SOL':
            // Solana private key formats:
            // 1. Base58 encoded (87-88 chars)
            // 2. Hex encoded (64 chars)
            // 3. Compressed format (43-44 chars)
            // 4. Array format ([32 bytes])
            regex = /^([1-9A-HJ-NP-Za-km-z]{43,44}|[1-9A-HJ-NP-Za-km-z]{87,88}|[a-fA-F0-9]{64}|\[[0-9,\s]+\])$/;
            errorMessage = "Invalid Solana (SOL) private key format. Accepted formats: Base58 encoded (44 or 88 chars), hex (64 chars), or byte array.";
            break;
            
        case 'SUI':
            // Sui private key formats:
            // 1. Standard hex (64 chars)
            // 2. Extended hex (128 chars)
            // 3. Base64 encoded (88 chars)
            // 4. Flag prefixed format (0x... or 1x...)
            regex = /^((0x|1x)?[a-fA-F0-9]{64,128}|[A-Za-z0-9+/]{86,88}=*)$/;
            errorMessage = "Invalid Sui (SUI) private key format. Accepted formats: hex (64/128 chars, optional prefix) or Base64 encoded.";
            break;
            
        case 'APT':
            // Aptos private key formats
            regex = /^(0x)?[a-fA-F0-9]{64}$/;
            errorMessage = "Invalid Aptos (APT) private key format. Must be 64 hex characters with optional '0x' prefix.";
            break;

        case 'TRX':
            // Tron private key formats
            regex = /^[a-fA-F0-9]{64}$/;
            errorMessage = "Invalid Tron (TRX) private key format. Must be 64 hex characters.";
            break;

        case 'DOGE':
            // Dogecoin uses similar format to Bitcoin
            regex = /^([6KL][1-9A-HJ-NP-Za-km-z]{50,51}|[a-fA-F0-9]{64})$/;
            errorMessage = "Invalid Dogecoin (DOGE) private key format. Accepted formats: WIF or hex.";
            break;
            
        default:
            return "Unsupported currency type. Please select a valid cryptocurrency.";
    }
    
    if (regex && !regex.test(normalizedKey)) {
        return errorMessage;
    }
    
    // Additional validation for hex strings to ensure they're not all zeros
    if (normalizedKey.match(/^(0x)?[0-9a-fA-F]+$/)) {
        const hexOnly = normalizedKey.replace('0x', '');
        if (hexOnly.match(/^0+$/)) {
            return "Invalid private key: Cannot be all zeros.";
        }
    }
    
    return "";
};
