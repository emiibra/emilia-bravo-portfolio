import { describe, expect, it as test } from "vitest";
import { en } from "./en";
import { es } from "./es";
import { it } from "./it";

type Tree = string | readonly Tree[] | { readonly [key: string]: Tree };

// Flattens a translation tree into path -> value, so languages can be compared key by key.
function flatten(node: Tree, path = "", out: Record<string, string> = {}) {
  if (typeof node === "string") out[path] = node;
  else if (Array.isArray(node)) { out[`${path}.length`] = String(node.length); node.forEach((child, index) => flatten(child, `${path}[${index}]`, out)); }
  else for (const [key, child] of Object.entries(node)) flatten(child as Tree, path ? `${path}.${key}` : key, out);
  return out;
}

const english = flatten(en as unknown as Tree);

describe.each([["es", es], ["it", it]] as const)("%s translation", (_, translation) => {
  const flat = flatten(translation as unknown as Tree);

  test("has exactly the same keys and list lengths as English", () => {
    expect(Object.keys(flat).sort()).toEqual(Object.keys(english).sort());
  });

  test("has no empty strings", () => {
    expect(Object.entries(flat).filter(([, value]) => value.trim() === "")).toEqual([]);
  });
});

test("English has no empty strings", () => {
  expect(Object.entries(english).filter(([, value]) => value.trim() === "")).toEqual([]);
});
