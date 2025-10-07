export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "sreed2";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "sreed2";
  }

  if (query.toLowerCase().includes("plus")) {
    const nums = query.split(" plus ");
    const num1 = nums[0].slice(8);
    const num2 = nums[1].slice(0, nums[1].indexOf(" "));
    return (parseInt(num1) + parseInt(num2)).toString();
  }

  return "";
}
