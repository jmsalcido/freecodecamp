const convertHTML = require('../convertHTML')

test("'Dolce & Gabbana' should return `Dolce &​amp; Gabbana`", function() {
    expect(convertHTML('Dolce & Gabbana')).toBe("Dolce &amp; Gabbana");
});

test("'Hamburgers < Pizza < Tacos' should return `Hamburgers &lt; Pizza &lt; Tacos`", function() {
    expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe("Hamburgers &lt; Pizza &lt; Tacos");
});

test("'Sixty > twelve' should return `Sixty &gt; twelve`", function() {
    expect(convertHTML("Sixty > twelve")).toBe("Sixty &gt; twelve");
});

test("`Stuff in \"quotation marks\"` should return `Stuff in &quot;quotation marks&quot;`", function() {
    expect(convertHTML('Stuff in "quotation marks"')).toBe("Stuff in &quot;quotation marks&quot;");
});

test("`Shindler's List` should return `Shindler&apos;s List`", function() {
    expect(convertHTML("Shindler's List")).toBe("Shindler&apos;s List");
});

test("`<>` should return `&lt;&gt;`", function() {
    expect(convertHTML("<>")).toBe("&lt;&gt;");
});

test("`abc` should return `abc`", function() {
    expect(convertHTML("abc")).toBe("abc");
});