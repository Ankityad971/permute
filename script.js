function findPermutation() {
  let str = document.getElementById("inputString").value.trim();
  let n = parseInt(document.getElementById("inputNumber").value);
  let output = document.getElementById("output");

  if (!str || isNaN(n)) {
    output.innerText = "⚠️ Please enter valid inputs.";
    return;
  }

  // Recursive permutation generator
  const getPermutations = (arr) => {
    if (arr.length === 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = getPermutations(remaining);
      for (const p of perms) result.push([current, ...p]);
    }
    return result;
  };

  let perms = getPermutations(str.split(""));
  let total = perms.length;

  if (n < 1 || n > total) {
    output.innerText = `❌ Invalid number! There are only ${total} permutations.`;
    return;
  }

  let nthPermutation = perms[n - 1].join("");
  output.innerText = `✅ Permutation ${n}: ${nthPermutation}\n🔢 Total permutations: ${total}`;
}
