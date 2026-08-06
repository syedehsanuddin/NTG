/**
 * NTG-SMS API BDD steps: reuse RMS step implementations with project `ntg-sms`.
 * Must set env before importing RMS steps (imports are hoisted in TS output;
 * this file is loaded alone for the SMS project so the assignment runs first).
 */
process.env.NTG_API_TEST_PROJECT = "ntg-sms";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("../../../NTG-RMS/api/step-definitions/steps");

export {};
