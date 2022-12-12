import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json";

export const CLUSTER = "testnet";

export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : clusterApiUrl("testnet");

export const TIKTOK_PROGRAM_ID = new PublicKey(
  "BShqBmAsHXUMnc79Z1EHtWywiic5S1FWH2Kd8i35wiwA"
);

export const TIKTOK_IDL = tiktok;
