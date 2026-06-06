// Run with: npm test  (Node's built-in test runner, native TS type-stripping)
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  CREATOR,
  GITHUB_REPO,
  SITE_URL,
  SUPPORT_EMAIL,
} from "./site.ts";

test("site URLs are absolute https", () => {
  assert.match(SITE_URL, /^https:\/\//);
});

test("GITHUB_REPO is in owner/repo form", () => {
  assert.match(GITHUB_REPO, /^[\w.-]+\/[\w.-]+$/);
});

test("support email looks like an email", () => {
  assert.match(SUPPORT_EMAIL, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
});

test("creator has a name", () => {
  assert.ok(CREATOR.name.length > 0);
});
