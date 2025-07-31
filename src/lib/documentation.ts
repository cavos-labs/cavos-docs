export const completeDocumentation = `# Cavos Service Complete Documentation

## Table of Contents
1. [Overview](#overview)
2. [Quick Start Guide](#quick-start-guide)
3. [Web SDK Documentation](#web-sdk-documentation)
4. [React Native SDK Documentation](#react-native-sdk-documentation)
5. [Authentication API Reference](#authentication-api-reference)
6. [Wallet & Transactions API Reference](#wallet--transactions-api-reference)

---

## Overview

Cavos Service provides comprehensive wallet infrastructure for Starknet with Auth0 integration, enabling developers to deploy smart accounts with a single API call and complete gas fee abstraction.

### Key Features

- **Instant Wallet Creation**: Deploy ArgentX smart accounts with one API call
- **Gas Fee Abstraction**: Complete gas fee handling through AVNU paymaster integration
- **Multi-Provider Authentication**: Apple Sign In, Google OAuth, and Auth0 support
- **Organization Management**: Multi-tenant architecture with org-based isolation
- **Smart Contract Execution**: Secure transaction execution on Starknet
- **Cross-Platform SDKs**: Web, React Native, and Node.js integration
- **Secure Token Management**: Automatic token refresh with rotating tokens

### Getting Started

Register your organization at https://services.cavos.xyz to get your App ID and API Secret, then choose your integration path.

---

## Quick Start Guide

Get started with Cavos Service in under 5 minutes. This guide will walk you through setting up Starknet wallet creation, authentication, and transaction execution in your application.

### Prerequisites

- Node.js 16+ or modern browser environment
- Basic knowledge of JavaScript/TypeScript
- A Cavos organization (register at https://services.cavos.xyz)

### Installation and Setup

#### Step 1: Installation

Install the Cavos Service SDK for your platform:

**Web/React Applications:**
\`\`\`bash
npm install cavos-service-sdk
\`\`\`

**React Native:**
\`\`\`bash
npm install cavos-service-native
\`\`\`

#### Step 2: Get Organization Credentials

1. Go to https://services.cavos.xyz
2. Register your organization
3. Save your App ID and API Secret securely

**Environment Variables:**
\`\`\`bash
# Frontend use (App ID - safe to expose)
REACT_APP_CAVOS_APP_ID=your-app-id

# Backend use only (API Secret - keep secure!)
CAVOS_ORG_SECRET=your-org-secret
\`\`\`

**Important:** Never expose your API Secret in frontend code. Use App ID for frontend components and API Secret for backend operations only.

#### Step 3: Basic Usage

**Web SDK Example:**
\`\`\`typescript
import { CavosAuth } from 'cavos-service-sdk';

// Register a new user with wallet deployment
const user = await CavosAuth.signUp(
  'user@example.com',
  'Password123',
  'YOUR_ORG_SECRET',
  'sepolia'
);

// Login existing user
const authData = await CavosAuth.signIn(
  'user@example.com', 
  'Password123', 
  'YOUR_ORG_SECRET'
);

console.log('Wallet Address:', user.data.wallet.address);
\`\`\`

---

## Web SDK Documentation

The Cavos Service Web SDK provides a complete Starknet wallet infrastructure solution for web applications. Built with TypeScript and optimized for modern web frameworks with automatic wallet deployment and gas fee abstraction.

### Key Features

- Complete TypeScript support with comprehensive type definitions
- Automatic ArgentX smart account deployment on Starknet
- AVNU paymaster integration for gas fee abstraction
- Auth0 integration with organization-based authentication
- CavosAuth class for authentication and wallet management
- Transaction execution and token swaps on Starknet
- Support for Sepolia testnet and Mainnet networks

### Installation

\`\`\`bash
npm install cavos-service-sdk
\`\`\`

### Basic Usage

\`\`\`typescript
import { CavosAuth } from 'cavos-service-sdk';

// Initialize with your organization secret
const auth = new CavosAuth('YOUR_ORG_SECRET');

// Register a new user
const user = await auth.signUp(
  'user@example.com',
  'Password123',
  'sepolia' // network
);

// Login existing user
const authData = await auth.signIn(
  'user@example.com',
  'Password123'
);

// Get wallet information
const wallet = authData.data.wallet;
console.log('Wallet Address:', wallet.address);
console.log('Network:', wallet.network);
\`\`\`

### Authentication Methods

#### Email/Password Authentication
\`\`\`typescript
// Registration
const user = await CavosAuth.signUp(
  email,
  password,
  orgSecret,
  network
);

// Login
const authData = await CavosAuth.signIn(
  email,
  password,
  orgSecret
);
\`\`\`

#### Apple Sign In
\`\`\`typescript
import { AppleSignIn } from 'cavos-service-sdk';

const appleAuth = new AppleSignIn('YOUR_APP_ID');
const result = await appleAuth.signIn();
\`\`\`

#### Google OAuth
\`\`\`typescript
import { GoogleOAuth } from 'cavos-service-sdk';

const googleAuth = new GoogleOAuth('YOUR_CLIENT_ID');
const result = await googleAuth.signIn();
\`\`\`

### Wallet Management

\`\`\`typescript
// Get wallet info
const walletInfo = await auth.getWalletInfo();

// Execute transaction
const tx = await auth.executeTransaction({
  contractAddress: '0x...',
  entrypoint: 'transfer',
  calldata: ['0x...', '0x...', '1000000000000000000']
});

// Token swap
const swap = await auth.swapTokens({
  fromToken: 'ETH',
  toToken: 'USDC',
  amount: '1000000000000000000'
});
\`\`\`

---

## React Native SDK Documentation

The Cavos Service React Native SDK provides seamless Starknet wallet integration for mobile applications. Built with Expo modules and featuring biometric authentication, automatic wallet deployment, and secure token management.

### Key Features

- Apple Sign In and Google OAuth components for React Native
- Automatic ArgentX smart account deployment on Starknet
- Biometric authentication for sensitive operations
- Secure token storage using Expo SecureStore
- CavosWallet class for transaction execution and wallet management
- Token rotation with backend-issued access/refresh tokens
- Support for Sepolia testnet and Mainnet networks

### Installation

\`\`\`bash
npm install cavos-service-native
\`\`\`

### Setup

#### iOS Configuration
Add to your \`app.json\`:
\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-apple-authentication",
        {
          "services": ["authentication"]
        }
      ]
    ]
  }
}
\`\`\`

#### Android Configuration
Add to your \`app.json\`:
\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-google-signin",
        {
          "iosUrlScheme": "com.googleusercontent.apps.YOUR_CLIENT_ID"
        }
      ]
    ]
  }
}
\`\`\`

### Basic Usage

\`\`\`typescript
import { CavosWallet } from 'cavos-service-native';

// Initialize wallet
const wallet = new CavosWallet('YOUR_ORG_SECRET');

// Register user
const user = await wallet.registerUser(
  'user@example.com',
  'Password123',
  'sepolia'
);

// Login user
const authData = await wallet.loginUser(
  'user@example.com',
  'Password123'
);

// Get wallet info
const walletInfo = await wallet.getWalletInfo();
\`\`\`

### Authentication Components

#### Apple Sign In Component
\`\`\`typescript
import { AppleSignInButton } from 'cavos-service-native';

<AppleSignInButton
  onSuccess={(result) => {
    console.log('Apple Sign In successful:', result);
  }}
  onError={(error) => {
    console.error('Apple Sign In failed:', error);
  }}
/>
\`\`\`

#### Google OAuth Component
\`\`\`typescript
import { GoogleSignInButton } from 'cavos-service-native';

<GoogleSignInButton
  onSuccess={(result) => {
    console.log('Google Sign In successful:', result);
  }}
  onError={(error) => {
    console.error('Google Sign In failed:', error);
  }}
/>
\`\`\`

### Biometric Authentication

\`\`\`typescript
import { BiometricAuth } from 'cavos-service-native';

const biometric = new BiometricAuth();

// Check if biometric is available
const isAvailable = await biometric.isAvailable();

// Authenticate with biometric
const isAuthenticated = await biometric.authenticate(
  'Please authenticate to access your wallet'
);
\`\`\`

### Transaction Execution

\`\`\`typescript
// Execute transaction with biometric auth
const tx = await wallet.executeTransaction({
  contractAddress: '0x...',
  entrypoint: 'transfer',
  calldata: ['0x...', '0x...', '1000000000000000000'],
  requireBiometric: true
});

// Token swap
const swap = await wallet.swapTokens({
  fromToken: 'ETH',
  toToken: 'USDC',
  amount: '1000000000000000000',
  requireBiometric: true
});
\`\`\`

---

## Authentication API Reference

The Cavos Service Authentication API provides programmatic access to user registration, login, and wallet deployment features.

### Base URL
Production: https://services.cavos.xyz/api/v1/external

### Authentication
All API requests require authentication using your organization secret token for registration/login endpoints, or user access tokens for user-specific operations.

### Endpoints

#### Register User
\`\`\`http
POST /auth/register
Content-Type: application/json
Authorization: Bearer YOUR_ORG_SECRET

{
  "email": "user@example.com",
  "password": "Password123",
  "network": "sepolia"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com"
    },
    "wallet": {
      "address": "0x...",
      "network": "sepolia",
      "deployed": true
    },
    "tokens": {
      "access_token": "access_token_here",
      "refresh_token": "refresh_token_here"
    }
  }
}
\`\`\`

#### Login User
\`\`\`http
POST /auth/login
Content-Type: application/json
Authorization: Bearer YOUR_ORG_SECRET

{
  "email": "user@example.com",
  "password": "Password123"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com"
    },
    "wallet": {
      "address": "0x...",
      "network": "sepolia",
      "deployed": true
    },
    "tokens": {
      "access_token": "access_token_here",
      "refresh_token": "refresh_token_here"
    }
  }
}
\`\`\`

#### Refresh Token
\`\`\`http
POST /auth/refresh
Content-Type: application/json

{
  "refresh_token": "refresh_token_here"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "access_token": "new_access_token_here",
    "refresh_token": "new_refresh_token_here"
  }
}
\`\`\`

#### Get User Info
\`\`\`http
GET /auth/user
Authorization: Bearer USER_ACCESS_TOKEN
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com"
    },
    "wallet": {
      "address": "0x...",
      "network": "sepolia",
      "deployed": true
    }
  }
}
\`\`\`

---

## Wallet & Transactions API Reference

The Cavos Service Wallet & Transactions API provides programmatic access to wallet deployment, transaction execution, and token swap functionality on Starknet.

### Base URL
Production: https://services.cavos.xyz/api/v1/external

### Authentication
All API requests require authentication using either your organization secret (for wallet deployment) or user access tokens (for transaction execution).

### Endpoints

#### Deploy Wallet
\`\`\`http
POST /wallet/deploy
Content-Type: application/json
Authorization: Bearer YOUR_ORG_SECRET

{
  "user_id": "user_id",
  "network": "sepolia"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "wallet": {
      "address": "0x...",
      "network": "sepolia",
      "deployed": true,
      "deployment_tx": "0x..."
    }
  }
}
\`\`\`

#### Get Wallet Info
\`\`\`http
GET /wallet/info
Authorization: Bearer USER_ACCESS_TOKEN
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "wallet": {
      "address": "0x...",
      "network": "sepolia",
      "deployed": true,
      "balance": "1000000000000000000"
    }
  }
}
\`\`\`

#### Execute Transaction
\`\`\`http
POST /wallet/execute
Content-Type: application/json
Authorization: Bearer USER_ACCESS_TOKEN

{
  "contract_address": "0x...",
  "entrypoint": "transfer",
  "calldata": ["0x...", "0x...", "1000000000000000000"]
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "transaction": {
      "hash": "0x...",
      "status": "accepted",
      "contract_address": "0x...",
      "entrypoint": "transfer",
      "calldata": ["0x...", "0x...", "1000000000000000000"]
    }
  }
}
\`\`\`

#### Token Swap
\`\`\`http
POST /wallet/swap
Content-Type: application/json
Authorization: Bearer USER_ACCESS_TOKEN

{
  "from_token": "ETH",
  "to_token": "USDC",
  "amount": "1000000000000000000"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "swap": {
      "hash": "0x...",
      "status": "accepted",
      "from_token": "ETH",
      "to_token": "USDC",
      "amount": "1000000000000000000",
      "received_amount": "1000000"
    }
  }
}
\`\`\`

#### Get Transaction Status
\`\`\`http
GET /wallet/transaction/{tx_hash}
Authorization: Bearer USER_ACCESS_TOKEN
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "transaction": {
      "hash": "0x...",
      "status": "accepted",
      "block_number": 12345,
      "timestamp": 1234567890
    }
  }
}
\`\`\`

---

## Error Codes

### Authentication Errors
- \`400\`: Invalid request parameters
- \`401\`: Unauthorized - invalid credentials
- \`403\`: Forbidden - insufficient permissions
- \`404\`: User not found
- \`409\`: User already exists
- \`422\`: Validation error

### Wallet Errors
- \`400\`: Invalid transaction parameters
- \`401\`: Unauthorized - invalid access token
- \`404\`: Wallet not found
- \`422\`: Invalid contract address or entrypoint
- \`500\`: Transaction execution failed

### Network Errors
- \`503\`: Service temporarily unavailable
- \`504\`: Gateway timeout

---

## Best Practices

### Security
1. Never expose your organization secret in frontend code
2. Use HTTPS for all API communications
3. Implement proper token storage and rotation
4. Validate all user inputs
5. Use biometric authentication for sensitive operations

### Performance
1. Cache wallet information when possible
2. Implement proper error handling and retry logic
3. Use appropriate network selection (sepolia for testing)
4. Monitor transaction status asynchronously

### User Experience
1. Provide clear error messages to users
2. Implement loading states for async operations
3. Use appropriate UI feedback for transaction status
4. Guide users through the wallet deployment process

---

## Support

- **Documentation**: https://docs.cavos.xyz
- **API Reference**: https://services.cavos.xyz
- **GitHub**: https://github.com/adrianvrj/cavos-service-sdk
- **Organization Registration**: https://services.cavos.xyz

---

*Generated on ${new Date().toISOString()}*
`;

export const generateCompleteDocumentation = () => {
  // Create a blob with the markdown content
  const blob = new Blob([completeDocumentation], { type: "text/markdown" });

  // Create a download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cavos-complete-documentation.md";

  // Trigger download
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
