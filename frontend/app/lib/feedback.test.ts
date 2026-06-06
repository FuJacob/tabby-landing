// Run with: npm test  (Node's built-in test runner, native TS type-stripping)
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  ALLOWED_IMAGE_TYPES,
  IMAGE_TYPE_EXTENSIONS,
  MAX_SCREENSHOT_BYTES,
  MAX_SCREENSHOTS,
  SCREENSHOT_PATH_RE,
} from "./feedback.ts";

const UUID = "123e4567-e89b-12d3-a456-426614174000";

test("SCREENSHOT_PATH_RE accepts <uuid>.<allowed-ext>", () => {
  for (const ext of ["png", "jpg", "jpeg", "gif", "webp"]) {
    assert.ok(
      SCREENSHOT_PATH_RE.test(`${UUID}.${ext}`),
      `expected ${ext} to be accepted`,
    );
  }
});

test("SCREENSHOT_PATH_RE rejects traversal, injection, and bad extensions", () => {
  const bad = [
    `../${UUID}.png`, // path traversal
    `${UUID}.svg`, // disallowed type (no inline-script vector)
    `${UUID}.exe`, // executable
    `evil.com/${UUID}.png`, // url injection
    `${UUID}.png.exe`, // double extension
    "not-a-uuid.png",
    `${UUID}`, // missing extension
    "",
  ];
  for (const value of bad) {
    assert.ok(!SCREENSHOT_PATH_RE.test(value), `expected ${value} to be rejected`);
  }
});

test("image type table and limits stay consistent", () => {
  assert.deepEqual(ALLOWED_IMAGE_TYPES, Object.keys(IMAGE_TYPE_EXTENSIONS));
  assert.equal(MAX_SCREENSHOT_BYTES, 5_000_000);
  assert.ok(MAX_SCREENSHOTS > 0);
});
