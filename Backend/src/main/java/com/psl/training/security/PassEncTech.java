package com.psl.training.security;

import java.math.BigInteger;  
import java.nio.charset.StandardCharsets;  
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;

import org.springframework.stereotype.Service;  

@Service
public class PassEncTech 
{  
    public static byte[] getSHA(String input) throws NoSuchAlgorithmException 
    {  
        /* MessageDigest instance for hashing using SHA256 */  
        MessageDigest md = MessageDigest.getInstance("SHA-256");  
  
        /* digest() method called to calculate message digest of an input and return array of byte */  
        return md.digest(input.getBytes(StandardCharsets.UTF_8));  
    }  
      
    public static String toHexString(byte[] hash)  
    {  
        /* Convert byte array of hash into digest */  
        BigInteger number = new BigInteger(1, hash);  
  
        /* Convert the digest into hex value */  
        StringBuilder hexString = new StringBuilder(number.toString(16));  
  
        /* Pad with leading zeros */  
        while (hexString.length() < 32)  
        {  
            hexString.insert(0, '0');  
        }  
  
        return hexString.toString();  
    }  
    public static String toHex(String s) throws NoSuchAlgorithmException {
    	return toHexString(getSHA(s));
    }
    
    /* Driver code */  
    
}  