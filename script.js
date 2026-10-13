/* ═══════════════════════════════════════════════════════
   Typing Practice Pro — Main Script (v2.0 — Step 3 Fixed)
   Idea & Advisor: Nishat Hossain Badhon
   Crafted by: DeepSeek AI
   ═══════════════════════════════════════════════════════ */

/* ─── 1. WORDS DATABASE ───────────────────────────── */
const WORDS = {
  en: {
    easy: ["cat","dog","sun","moon","star","tree","book","pen","cup","bag","car","bus","run","sit","eat","fly","red","blue","green","big","small","hot","cold","day","night","hand","foot","eye","ear","nose","milk","rice","fish","egg","cake","ball","toy","door","wall","floor","road","sky","sea","hill","river","bird","frog","cow","goat","hen","duck","lion","tiger","bear","wolf","fox","rat","bat","ant","bee","hat","cap","shoe","sock","shirt","pant","coat","glove","table","chair","bed","lamp","clock","phone","key","lock","box","boy","girl","man","woman","baby","child","friend","mother","father","sister","brother"],
    medium: ["pencil,","window,","garden,","flower,","orange,","banana,","computer,","keyboard,","morning,","evening,","teacher,","student,","school,","college,","library,","mountain,","river,","ocean,","desert,","forest,","village,","city,","country,","weather,","climate,","nature,","animal,","butterfly,","elephant,","giraffe,","monkey,","rabbit,","squirrel,","turtle,","dolphin,","whale,","shark,","penguin,","airplane,","bicycle,","motorcycle,","hospital,","restaurant,","market,","station,","journey,","holiday,","weekend,","birthday,","festival,","celebration,","tradition,","language,","culture,","history,","science,","mathematics,","physics,","chemistry,","biology,","geography,","philosophy,","psychology,","technology,","engineering,"],
    hard: ["extraordinary,","sophisticated,","magnificent,","breathtaking,","phenomenal,","unprecedented,","revolutionary,","technological,","environmental,","architectural,","philosophical,","psychological,","mathematical,","astronomical,","geographical,","communication,","international,","responsibility,","opportunity,","possibility,","development,","achievement,","improvement,","establishment,","encouragement,","understanding,","consideration,","investigation,","determination,","concentration,","imagination,","inspiration,","motivation,","celebration,","explanation,","accomplishment,","acknowledgment,","administration,","characteristic,","classification,"]
  },
  bn: {
    easy: ["বই","কলম","ঘর","বাড়ি","গাছ","ফুল","পাখি","মাছ","গরু","ছাগল","নদী","পাহাড়","আকাশ","সূর্য","চাঁদ","তারা","মেঘ","বৃষ্টি","হাত","পা","চোখ","কান","নাক","মুখ","মাথা","চুল","জল","দুধ","ভাত","রুটি","আম","কাঁঠাল","কলা","পেঁয়াজ","রসুন","মরিচ","লবণ","চিনি","তেল","ঘি","মা","বাবা","ভাই","বোন","দাদা","দাদি","নানা","নানি","ছেলে","মেয়ে","শহর","গ্রাম","দেশ","বিদেশ","স্কুল","কলেজ","বাজার","দোকান","রাস্তা","ঘাট"],
    medium: ["বাংলাদেশ,","রাজধানী,","ঢাকা,","চট্টগ্রাম,","খুলনা,","রাজশাহী,","সিলেট,","বরিশাল,","পরিবার,","সমাজ,","শিক্ষক,","শিক্ষার্থী,","বিদ্যালয়,","বিশ্ববিদ্যালয়,","গ্রন্থাগার,","পর্বত,","সমুদ্র,","মরুভূমি,","বনভূমি,","হ্রদ,","ঝর্ণা,","প্রকৃতি,","প্রাণী,","প্রজাপতি,","হাতি,","জিরাফ,","বানর,","খরগোশ,","কাছিম,","ডলফিন,","তিমি,","হাঙর,","পেঙ্গুইন,","বিমান,","সাইকেল,","মোটরসাইকেল,","হাসপাতাল,","রেস্টুরেন্ট,","স্টেশন,","ভ্রমণ,","ছুটি,","সপ্তাহান্ত,","জন্মদিন,","উৎসব,","উদযাপন,","ঐতিহ্য,","সংস্কৃতি,"],
    hard: ["অসাধারণ,","বিস্ময়কর,","চমকপ্রদ,","অবিশ্বাস্য,","প্রযুক্তিগত,","পরিবেশগত,","স্থাপত্য,","দার্শনিক,","মনস্তাত্ত্বিক,","গাণিতিক,","জ্যোতির্বিজ্ঞান,","ভৌগোলিক,","যোগাযোগ,","আন্তর্জাতিক,","দায়িত্ব,","সুযোগ,","সম্ভাবনা,","উন্নয়ন,","অর্জন,","উন্নতি,","প্রতিষ্ঠা,","উৎসাহ,","বোঝাপড়া,","বিবেচনা,","তদন্ত,","সংকল্প,","একাগ্রতা,","কল্পনা,","অনুপ্রেরণা,","প্রেরণা,","উদযাপন,","ব্যাখ্যা,","সম্পাদনা,"]
  }
};

/* ─── 2. PARAGRAPH DATABASE ───────────────────────── */
const PARAGRAPHS = {
  en: {
    easy: [
      "The sun rises in the east and sets in the west. Every morning brings new hope. People wake up and start their daily work. Children go to school. Farmers work hard in their fields. Birds sing sweet songs in the trees. It is a beautiful world we live in.",
      "Reading books is a great habit. It helps us learn new things. A good book can teach us many lessons about life. We can read story books, science books, or history books. Reading every day makes us smarter and wiser. Everyone should read at least one book a month.",
      "Water is life. Without water, no living thing can survive. We drink water every day. Plants need water to grow. Animals need water to live. We should always save water because it is precious. Do not waste it. Every drop counts."
    ],
    medium: [
      "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet. Practice makes a man perfect, so keep typing every single day. A journey of a thousand miles begins with a single step. The best way to predict the future is to invent it. Simplicity is the ultimate sophistication in software design.",
      "Education is the most powerful weapon which you can use to change the world. It is the key to success in life. A good education opens many doors of opportunity. It teaches us how to think, how to solve problems, and how to communicate with others.",
      "Technology has changed our lives in many ways. We use smartphones, computers, and the internet every day. Communication is now easier and faster than ever before. We can talk to people across the world in seconds."
    ],
    hard: [
      "The extraordinary complexity of modern software systems demands rigorous testing, careful documentation, and relentless attention to detail. Programming isn't about what you know; it's about what you can figure out, and that requires consistent, deliberate practice every single day.",
      "Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures. They understand that failure is not the opposite of success, but a stepping stone on the path to it."
    ]
  },
  bn: {
    easy: [
      "সূর্য পূর্ব দিকে ওঠে এবং পশ্চিম দিকে অস্ত যায়। প্রতিটি সকাল নতুন আশা নিয়ে আসে। মানুষ ঘুম থেকে উঠে কাজ শুরু করে। শিশুরা ব্যাগ নিয়ে স্কুলে যায়। কৃষকরা মাঠে পরিশ্রম করে। পাখিরা গাছে মিষ্টি গান গায়।",
      "বই পড়া একটি মহৎ অভ্যাস। এটি আমাদের নতুন জিনিস শিখতে সাহায্য করে। একটি ভালো বই আমাদের জীবনের অনেক শিক্ষা দিতে পারে। প্রতিদিন পড়া আমাদের আরও বুদ্ধিমান করে তোলে।",
      "পানি হলো জীবন। পানি ছাড়া কোনো প্রাণী বাঁচতে পারে না। আমরা প্রতিদিন পানি পান করি। গাছের বেড়ে ওঠার জন্য পানি প্রয়োজন। প্রাণীদের বেঁচে থাকার জন্য পানি দরকার।"
    ],
    medium: [
      "শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র যা দিয়ে আপনি বিশ্বকে বদলাতে পারেন। এটি জীবনে সফলতার চাবিকাঠি। একটি ভালো শিক্ষা সুযোগের অনেক দরজা খুলে দেয়। প্রত্যেকেরই শিক্ষার অধিকার রয়েছে।",
      "প্রযুক্তি আমাদের জীবনকে অনেকভাবে বদলে দিয়েছে। আমরা প্রতিদিন স্মার্টফোন, কম্পিউটার এবং ইন্টারনেট ব্যবহার করি। যোগাযোগ এখন আগের চেয়ে অনেক সহজ এবং দ্রুত। তবে আমাদের সতর্কও থাকতে হবে।",
      "বাংলাদেশের প্রকৃতি অপরূপ সৌন্দর্যে ভরা। এদেশের নদী, নালা, খাল, বিল, পুকুর, সবুজ ক্ষেত এবং গাছপালা সত্যিই মনোমুগ্ধকর। এখানকার মানুষ অত্যন্ত আন্তরিক এবং অতিথিপরায়ণ।"
    ],
    hard: [
      "প্রোগ্রামিং শেখার মূল রহস্য হলো ধৈর্য ধরে প্রতিদিন অনুশীলন করা এবং ছোট ছোট সমস্যা সমাধান করে এগিয়ে যাওয়া। প্রোগ্রামিং শুধু কোড লেখা নয়, বরং চিন্তা করার একটি শিল্প।"
    ]
  }
};

/* ─── 3. CODE DATABASE ────────────────────────────── */
const CODE_SNIPPETS = {
  python: {
    easy: [
      "print('Hello World')",
      "x = 5",
      "name = 'Python'",
      "if x > 0: print('yes')",
      "for i in range(5): print(i)",
      "def greet(): print('hi')",
      "nums = [1, 2, 3]",
      "total = sum(nums)",
      "print(len(nums))",
      "age = 25"
    ],
    medium: [
      "def add(a, b):\n    return a + b",
      "for i in range(10):\n    print(i * 2)",
      "users = {'name': 'Alice', 'age': 30}",
      "if x > 10 and y < 20:\n    print('range ok')",
      "result = [n ** 2 for n in range(5)]",
      "with open('data.txt') as f:\n    content = f.read()",
      "def factorial(n):\n    return 1 if n <= 1 else n * factorial(n - 1)",
      "import math\nprint(math.sqrt(16))"
    ],
    hard: [
      "class User:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
      "def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a",
      "from typing import List\n\ndef unique(items: List[int]) -> List[int]:\n    return list(set(items))",
      "async def fetch_data(url: str):\n    async with aiohttp.ClientSession() as s:\n        return await s.get(url)"
    ]
  },
  javascript: {
    easy: [
      "console.log('Hello');",
      "let x = 5;",
      "const name = 'JS';",
      "if (x > 0) console.log('yes');",
      "for (let i = 0; i < 5; i++) {}",
      "function greet() {}",
      "const nums = [1, 2, 3];",
      "nums.push(4);",
      "console.log(nums.length);",
      "let age = 25;"
    ],
    medium: [
      "const add = (a, b) => a + b;",
      "nums.map(n => n * 2);",
      "const user = { name: 'Alice', age: 30 };",
      "if (x > 10 && y < 20) { /* ok */ }",
      "const doubled = nums.filter(n => n > 1);",
      "const [first, ...rest] = nums;",
      "async function load() {\n  const r = await fetch(url);\n  return r.json();\n}",
      "const sum = nums.reduce((a, b) => a + b, 0);"
    ],
    hard: [
      "class User {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}",
      "const memoize = fn => {\n  const cache = new Map();\n  return (...args) => {\n    const k = JSON.stringify(args);\n    if (!cache.has(k)) cache.set(k, fn(...args));\n    return cache.get(k);\n  };\n};",
      "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}"
    ]
  },
  html: {
    easy: [
      "<h1>Hello World</h1>",
      "<p>This is a paragraph.</p>",
      "<a href='#'>Click here</a>",
      "<img src='cat.jpg' alt='Cat'>",
      "<ul><li>Item</li></ul>",
      "<button>Click</button>",
      "<input type='text'>",
      "<div>Content</div>",
      "<br>",
      "<hr>"
    ],
    medium: [
      "<div class='card'>\n  <h2>Title</h2>\n  <p>Body</p>\n</div>",
      "<ul>\n  <li>First</li>\n  <li>Second</li>\n</ul>",
      "<a href='https://example.com' target='_blank'>Link</a>",
      "<input type='email' placeholder='Enter email'>",
      "<table>\n  <tr><td>Cell</td></tr>\n</table>",
      "<form action='/submit' method='POST'>\n  <input type='text'>\n</form>"
    ],
    hard: [
      "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
      "<section class='container'>\n  <article>\n    <header><h2>Post</h2></header>\n    <p>Content here.</p>\n  </article>\n</section>",
      "<nav>\n  <ul>\n    <li><a href='/'>Home</a></li>\n    <li><a href='/about'>About</a></li>\n  </ul>\n</nav>"
    ]
  },
  css: {
    easy: [
      "color: red;",
      "font-size: 16px;",
      "margin: 10px;",
      "padding: 5px 10px;",
      "background: white;",
      "text-align: center;",
      "border: 1px solid black;",
      "width: 100%;",
      "height: 50px;",
      "display: flex;"
    ],
    medium: [
      ".btn {\n  padding: 10px 20px;\n  background: blue;\n  color: white;\n}",
      ".container {\n  display: flex;\n  gap: 10px;\n}",
      "h1, h2 {\n  font-family: Arial;\n  margin-bottom: 1rem;\n}",
      ".card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}",
      "body {\n  font-family: 'Segoe UI';\n  line-height: 1.6;\n}"
    ],
    hard: [
      "@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}",
      ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
      "@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.animate {\n  animation: fadeIn 0.5s;\n}"
    ]
  },
  c: {
    easy: [
      "#include <stdio.h>",
      "int x = 5;",
      "printf(\"Hello\");",
      "return 0;",
      "int main() { }",
      "char c = 'A';",
      "float pi = 3.14;",
      "x = x + 1;",
      "int arr[5];",
      "if (x > 0) { }"
    ],
    medium: [
      "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
      "for (int i = 0; i < 5; i++) {\n    printf(\"%d \", i);\n}",
      "int add(int a, int b) {\n    return a + b;\n}",
      "int arr[] = {1, 2, 3, 4, 5};",
      "if (x > 10 && y < 20) {\n    printf(\"ok\");\n}"
    ],
    hard: [
      "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = malloc(10 * sizeof(int));\n    if (!arr) return 1;\n    free(arr);\n    return 0;\n}",
      "typedef struct {\n    char name[50];\n    int age;\n} Person;\n\nvoid greet(Person *p) {\n    printf(\"Hello, %s\\n\", p->name);\n}"
    ]
  },
  java: {
    easy: [
      "int x = 5;",
      "String name = \"Java\";",
      "System.out.println(\"Hello\");",
      "if (x > 0) { }",
      "for (int i = 0; i < 5; i++) { }",
      "public class Main { }",
      "boolean flag = true;",
      "double pi = 3.14;",
      "int[] arr = new int[5];",
      "return;"
    ],
    medium: [
      "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}",
      "public int add(int a, int b) {\n    return a + b;\n}",
      "for (int i : arr) {\n    System.out.println(i);\n}",
      "List<String> list = new ArrayList<>();\nlist.add(\"item\");",
      "try {\n    // code\n} catch (Exception e) {\n    e.printStackTrace();\n}"
    ],
    hard: [
      "public class User {\n    private String name;\n    private int age;\n    \n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}",
      "@Override\npublic String toString() {\n    return \"User{\" + name + \", age=\" + age + \"}\";\n}"
    ]
  },
  php: {
    easy: [
      "<?php echo 'Hello'; ?>",
      "$x = 5;",
      "$name = 'PHP';",
      "if ($x > 0) { }",
      "for ($i = 0; $i < 5; $i++) { }",
      "function greet() { }",
      "$arr = [1, 2, 3];",
      "echo $x;",
      "// comment",
      "$flag = true;"
    ],
    medium: [
      "<?php\nfunction add($a, $b) {\n    return $a + $b;\n}\necho add(2, 3);\n?>",
      "$user = ['name' => 'Alice', 'age' => 30];\necho $user['name'];",
      "foreach ($arr as $item) {\n    echo $item;\n}",
      "if ($x > 10 && $y < 20) {\n    echo 'ok';\n}"
    ],
    hard: [
      "<?php\nclass User {\n    public function __construct(\n        public string $name,\n        public int $age\n    ) {}\n}\n?>",
      "<?php\n$result = array_map(\n    fn($n) => $n * 2,\n    $numbers\n);\n?>"
    ]
  },
  sql: {
    easy: [
      "SELECT * FROM users;",
      "SELECT name FROM users;",
      "INSERT INTO users VALUES (1, 'Alice');",
      "UPDATE users SET age = 30;",
      "DELETE FROM users WHERE id = 1;",
      "CREATE TABLE users (id INT);",
      "DROP TABLE users;",
      "SELECT COUNT(*) FROM users;",
      "WHERE age > 18;",
      "ORDER BY name;"
    ],
    medium: [
      "SELECT name, age\nFROM users\nWHERE age > 18\nORDER BY age DESC;",
      "SELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id;",
      "INSERT INTO users (name, age)\nVALUES ('Alice', 30);",
      "UPDATE users\nSET age = age + 1\nWHERE id = 5;",
      "SELECT COUNT(*) AS total\nFROM users\nGROUP BY city;"
    ],
    hard: [
      "SELECT u.name, COUNT(o.id) AS orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id\nHAVING COUNT(o.id) > 5\nORDER BY orders DESC\nLIMIT 10;",
      "WITH ranked AS (\n  SELECT name, score,\n    ROW_NUMBER() OVER (ORDER BY score DESC) AS rn\n  FROM players\n)\nSELECT * FROM ranked WHERE rn <= 10;"
    ]
  },
  bash: {
    easy: [
      "echo \"Hello\"",
      "ls -la",
      "cd /home/user",
      "pwd",
      "mkdir newfolder",
      "touch file.txt",
      "rm file.txt",
      "cp a.txt b.txt",
      "mv old.txt new.txt",
      "cat file.txt"
    ],
    medium: [
      "#!/bin/bash\necho \"Script started\"\nfor i in {1..5}; do\n  echo \"$i\"\ndone",
      "if [ -f \"$file\" ]; then\n  echo \"exists\"\nfi",
      "grep -r \"pattern\" ./src",
      "find . -name \"*.txt\" -type f",
      "chmod +x script.sh && ./script.sh"
    ],
    hard: [
      "#!/bin/bash\nset -euo pipefail\n\nfor f in *.log; do\n  [ -f \"$f\" ] || continue\n  gzip \"$f\"\ndone",
      "tar -czvf backup.tar.gz \\\n  --exclude='node_modules' \\\n  --exclude='.git' \\\n  ./project"
    ]
  }
};

/* ─── 4. NUMBERS DATABASE (ইংরেজি + বাংলা) ────────── */
const NUMBERS = {
  en: {
    easy: [
      "12", "47", "83", "25", "91", "34", "68", "15", "72", "56",
      "203", "417", "658", "129", "384", "572", "846", "215", "493", "728"
    ],
    medium: [
      "1234", "5678", "9012", "3456", "7890", "2345", "6789", "123456",
      "987654", "456789", "24680", "13579", "102938", "564738", "918273"
    ],
    hard: [
      "01712345678", "8801711234567", "2026-10-13", "13/10/2026",
      "1234.5678", "98765.4321", "+880-1711-234567",
      "192.168.1.1", "10.0.0.255", "3.1415926535",
      "$1,234.56", "$99.99", "1,00,000", "10,000,000",
      "#12345", "ID-987654", "PIN: 482910"
    ]
  },
  bn: {
    easy: [
      "১২", "৪৭", "৮৩", "২৫", "৯১", "৩৪", "৬৮", "১৫", "৭২", "৫৬",
      "২০৩", "৪১৭", "৬৫৮", "১২৯", "৩৮৪", "৫৭২", "৮৪৬", "২১৫", "৪৯৩", "৭২৮"
    ],
    medium: [
      "১২৩৪", "৫৬৭৮", "৯০১২", "৩৪৫৬", "৭৮৯০", "২৩৪৫", "৬৭৮৯", "১২৩৪৫৬",
      "৯৮৭৬৫৪", "৪৫৬৭৮৯", "২৪৬৮০", "১৩৫৭৯", "১০২৯৩৮", "৫৬৪৭৩৮", "৯১৮২৭৩"
    ],
    hard: [
      "০১৭১২৩৪৫৬৭৮", "৮৮০১৭১১২৩৪৫৬৭", "২০২৬-১০-১৩", "১৩/১০/২০২৬",
      "১২৩৪.৫৬৭৮", "৯৮৭৬৫.৪৩২১", "+৮৮০-১৭১১-২৩৪৫৬৭",
      "১৯২.১৬৮.১.১", "১০.০.০.২৫৫", "৩.১৪১৫৯২৬৫৩৫",
      "১,২৩৪.৫৬", "৯৯.৯৯", "১,০০,০০০", "১,০০,০০,০০০",
      "#১২৩৪৫", "আইডি-৯৮৭৬৫৪", "পিন: ৪৮২৯১০"
    ]
  }
};

/* ─── 5. SYMBOLS DATABASE ─────────────────────────── */
const SYMBOLS = {
  easy: [
    "!@#", "$%^", "&*(", ")-_", "=+{", "}[]", "|\\:", ";\"'", "<>,", ".?/",
    "!!", "@@", "##", "$$", "%%"
  ],
  medium: [
    "!@#$%", "^&*()_", "-+=[]{}", "|\\:;\"'", "<>,.?/", "(){}[]",
    "!@#$%^&*", "()_+-=", "{}[]|\\", ":;\"'<>",
    "@#$%^", "&*()_+"
  ],
  hard: [
    "!@#$%^&*()", "_+-=[]{}|\\", ":;\"'<>,.?/", "`~!@#$%^&*()_+",
    "{}|\\:;\"'<>", "[]{}()<>",
    "!@#$%^&*()_+-=[]{}|;:',.<>/?",
    "~`!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"
  ]
};

/* ─── 6. QUOTES DATABASE ──────────────────────────── */
const QUOTES = {
  en: {
    easy: [
      "Stay hungry, stay foolish.",
      "Be the change you wish to see.",
      "Simplicity is the ultimate sophistication.",
      "The best way to predict the future is to invent it.",
      "Talk is cheap. Show me the code.",
      "Done is better than perfect.",
      "Code is poetry.",
      "First, solve the problem.",
      "Keep it simple.",
      "Move fast and break things."
    ],
    medium: [
      "The only way to do great work is to love what you do. — Steve Jobs",
      "In the middle of difficulty lies opportunity. — Albert Einstein",
      "The journey of a thousand miles begins with a single step. — Lao Tzu",
      "Success is not final, failure is not fatal. — Winston Churchill",
      "Whether you think you can or you think you can't, you're right. — Henry Ford",
      "The unexamined life is not worth living. — Socrates",
      "Imagination is more important than knowledge. — Albert Einstein",
      "Be yourself; everyone else is already taken. — Oscar Wilde"
    ],
    hard: [
      "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
      "It does not matter how slowly you go as long as you do not stop. — Confucius",
      "Our lives begin to end the day we become silent about things that matter. — Martin Luther King Jr.",
      "The only impossible journey is the one you never begin. — Tony Robbins",
      "You miss 100% of the shots you don't take. — Wayne Gretzky"
    ]
  },
  bn: {
    easy: [
      "চেষ্টা করলে সব সম্ভব।",
      "সময় নদীর স্রোতের মতো।",
      "জ্ঞানই আলো।",
      "পরিশ্রমই সাফল্যের চাবিকাঠি।",
      "সৎ থাকো, সফল হবে।",
      "বই পড়ো, জ্ঞান অর্জন করো।",
      "মাতৃভাষা বাংলা মধুর।",
      "সবাইকে সম্মান করো।"
    ],
    medium: [
      "যে সহে, সে রহে। — প্রবাদ",
      "আলো যে চায়, সে আলো পায় না; যে আলো দেয়, সে আলো পায়। — রবীন্দ্রনাথ ঠাকুর",
      "সুন্দর হৃদয়ই সত্যিকারের সৌন্দর্য।",
      "সকলের তরে সকলে আমরা, প্রত্যেকে আমরা পরের তরে। — কাজী নজরুল ইসলাম",
      "সাহসী মানুষ কখনো পিছপা হয় না।",
      "চরিত্রই মানুষের প্রকৃত পরিচয়।"
    ],
    hard: [
      "আপনি যা ভাবেন, তাই হয়ে ওঠেন। আপনি যা বিশ্বাস করেন, তাই পেয়ে যান। — রবীন্দ্রনাথ ঠাকুর",
      "বাংলার মানুষ চিরদিন কৃষক, চিরদিন শ্রমিক, চিরদিন বীর। — কাজী নজরুল ইসলাম",
      "মানুষ মরে গেলে পচে যায়, বেঁচে থাকলে বাড়ে চাওয়া। — জীবনানন্দ দাশ",
      "সবার উপর মানুষ সত্য, তাহার পরে নাই কিছুই। — চণ্ডীদাস"
    ]
  }
};

/* ─── 7. LITERATURE DATABASE ──────────────────────── */
const LITERATURE = {
  easy: [
    "আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। — রবীন্দ্রনাথ ঠাকুর",
    "মোরা একটি ফুলকে বাঁচাবো বলে যুদ্ধ করি। — কাজী নজরুল ইসলাম",
    "আমি যাহা চাই, তাহা চাই অকপটে। — রবীন্দ্রনাথ ঠাকুর",
    "চল চল চল, ঊর্ধ্ব গগনে বাজে মাদল। — কাজী নজরুল ইসলাম",
    "বাংলার মুখ আমি দেখিয়াছি। — জীবনানন্দ দাশ",
    "আমি কৃষ্ণের কুলের বাঁশিওয়ালা। — কাজী নজরুল ইসলাম"
  ],
  medium: [
    "আমার এ ঘরে আপনার করে ঢুকেছি আমি। — রবীন্দ্রনাথ ঠাকুর",
    "বন্দীর বাঁধন ছিল মোর গোপন, বাঁধন ছিল প্রাণের। — রবীন্দ্রনাথ ঠাকুর",
    "কারার ঐ লৌহকপাট, ভেঙ্গে ফেল কর রে লোপাট। — কাজী নজরুল ইসলাম",
    "বঙ্গ আমার, জননী আমার, ধাত্রী আমার, দেশ আমার। — কাজী নজরুল ইসলাম",
    "আবার আসিব ফিরে ধানসিঁড়িটির তীরে এই বাংলায়। — জীবনানন্দ দাশ",
    "হে মহাজীবন, আর এ কাব্য নয়। — রবীন্দ্রনাথ ঠাকুর"
  ],
  hard: [
    "এই পৃথিবী কখনো সখনো আমাদের মুখের উপর তার নিষ্ঠুরতম রূপটি ঢেকে রাখে, একদিন হঠাৎ সেটা দেখা যায়। — জীবনানন্দ দাশ",
    "আমি চলে যাবো, তুমি থাকো, বাংলার মাটি আর মানুষের হাসি থাকো। — সুকান্ত ভট্টাচার্য",
    "কাঁটার দিকে যেও না, ফুলের দিকেও যেও না, যে দিকে সবাই যায় সেদিকেও যেও না — যাও কল্যাণের দিকে। — স্বামী বিবেকানন্দ",
    "সৃষ্টির সেরা জীব মানুষ, মানুষই ভগবান, মানুষের চেয়ে বড় কিছু নেই। — রবীন্দ্রনাথ ঠাকুর",
    "সংগ্রাম করো, ন্যায়ের জন্য, সত্যের জন্য, দেশের জন্য। — বঙ্কিমচন্দ্র চট্টোপাধ্যায়"
  ]
};

/* ─── 8. BENGALI DRILLS ───────────────────────────── */
const BENGALI_DRILLS = {
  easy: [
    "ক্ষ", "ত্র", "জ্ঞ", "ঞ্চ", "ষ্ণ", "হ্ম", "শ্র", "ন্ক", "ন্দ", "ম্প",
    "ক্তি", "প্তি", "ষ্টি", "ঙ্গ", "ম্ম", "ন্ন", "ল্ল", "ল্প", "র্গ",
    "কা", "কি", "কী", "কু", "কূ", "কে", "কৈ", "কো", "কৌ", "কং"
  ],
  medium: [
    "আকাঙ্ক্ষা", "বিজ্ঞান", "স্বাস্থ্য", "শ্রদ্ধা", "সৌন্দর্য", "প্রকৃতির",
    "সূর্যমুখী", "বনফুল", "মাতৃভাষা", "মহাকাশ", "ইতিহাস", "সাহিত্য",
    "পরিবার", "আনন্দ", "বিশ্ব", "সুখ", "হৃদয়", "চন্দ্র", "তারা", "সাগর"
  ],
  hard: [
    "বিংশ শতাব্দী", "স্বায়ত্তশাসন", "আত্মজীবনী", "পূর্বাশা", "কম্পাঙ্ক",
    "উজ্জ্বল", "স্ফুলিঙ্গ", "কুঙ্কুম", "সন্ন্যাসী", "পরীক্ষা", "পরিষ্কার",
    "আত্মসমর্পণ", "ব্যাকরণিক", "দুর্লভ", "সঞ্চিত", "বিস্ময়",
    "আকস্মিক", "সংক্ষিপ্ত", "হৃৎপিণ্ড", "দুর্বল", "সৌভাগ্য"
  ]
};

/* ─── 9. ACHIEVEMENTS ─────────────────────────────── */
const ACHIEVEMENTS = [
  { id: "first_step",   icon: "🥉", en: "First Step",        bn: "প্রথম পদক্ষেপ",      descEn: "Complete first test",         descBn: "প্রথম টেস্ট সম্পন্ন",       check: (s) => s.totalSessions >= 1 },
  { id: "wpm30",        icon: "🥈", en: "30 WPM Club",       bn: "৩০ WPM ক্লাব",       descEn: "Reach 30 WPM",              descBn: "৩০ WPM অর্জন",            check: (s) => Math.max(s.bestScores.en, s.bestScores.bn) >= 30 },
  { id: "wpm50",        icon: "🥇", en: "50 WPM Club",       bn: "৫০ WPM ক্লাব",       descEn: "Reach 50 WPM",              descBn: "৫০ WPM অর্জন",            check: (s) => Math.max(s.bestScores.en, s.bestScores.bn) >= 50 },
  { id: "wpm70",        icon: "⚡", en: "Speed Demon",        bn: "স্পিড ডেমন",          descEn: "Reach 70 WPM",              descBn: "৭০ WPM অর্জন",            check: (s) => Math.max(s.bestScores.en, s.bestScores.bn) >= 70 },
  { id: "wpm100",       icon: "🌪️", en: "Typing Tornado",    bn: "টাইপিং টর্নেডো",      descEn: "Reach 100 WPM",             descBn: "১০০ WPM অর্জন",           check: (s) => Math.max(s.bestScores.en, s.bestScores.bn) >= 100 },
  { id: "perfect",      icon: "💯", en: "Perfect Accuracy",  bn: "পারফেক্ট নির্ভুলতা",  descEn: "100% accuracy in a test",   descBn: "১০০% নির্ভুলতা",           check: (s) => s.bestAccuracy >= 100 },
  { id: "sniper",       icon: "🎯", en: "Sniper",            bn: "স্নাইপার",             descEn: "100% accuracy 3 times",     descBn: "৩ বার ১০০% নির্ভুলতা",      check: (s) => (s.perfectCount || 0) >= 3 },
  { id: "accurate90",   icon: "📐", en: "Precision",         bn: "সূক্ষ্মতা",            descEn: "90%+ accuracy in 10 tests", descBn: "১০ টেস্টে ৯০%+ নির্ভুলতা",  check: (s) => (s.highAccCount || 0) >= 10 },
  { id: "ten_tests",    icon: "📚", en: "10 Tests Done",     bn: "১০ টেস্ট",            descEn: "Complete 10 tests",         descBn: "১০টি টেস্ট সম্পন্ন",        check: (s) => s.totalSessions >= 10 },
  { id: "fifty_tests",  icon: "📖", en: "Half Century",      bn: "অর্ধশতক",             descEn: "Complete 50 tests",         descBn: "৫০টি টেস্ট সম্পন্ন",        check: (s) => s.totalSessions >= 50 },
  { id: "hundred_tests",icon: "📕", en: "Century",           bn: "শতক",                 descEn: "Complete 100 tests",        descBn: "১০০টি টেস্ট সম্পন্ন",       check: (s) => s.totalSessions >= 100 },
  { id: "streak3",      icon: "🔥", en: "3-Day Streak",      bn: "৩ দিনের স্ট্রিক",     descEn: "Practice 3 days in a row",  descBn: "টানা ৩ দিন প্র্যাকটিস",    check: (s) => s.streak.count >= 3 },
  { id: "streak7",      icon: "🌟", en: "Week Warrior",      bn: "সপ্তাহ যোদ্ধা",        descEn: "Practice 7 days in a row",  descBn: "টানা ৭ দিন প্র্যাকটিস",    check: (s) => s.streak.count >= 7 },
  { id: "streak30",     icon: "👑", en: "Monthly Master",    bn: "মাসিক মাস্টার",        descEn: "Practice 30 days in a row", descBn: "টানা ৩০ দিন প্র্যাকটিস",   check: (s) => s.streak.count >= 30 },
  { id: "early_bird",   icon: "☀️", en: "Early Bird",        bn: "ভোরের পাখি",           descEn: "Test before 7 AM",          descBn: "সকাল ৭টার আগে টেস্ট",      check: (s) => s.flags.earlyBird === true },
  { id: "night_owl",    icon: "🌙", en: "Night Owl",         bn: "নিশাচর",              descEn: "Test after 11 PM",          descBn: "রাত ১১টার পরে টেস্ট",      check: (s) => s.flags.nightOwl === true },
  { id: "marathon",     icon: "🏃", en: "Marathon",          bn: "ম্যারাথন",            descEn: "10+ minute test",           descBn: "১০+ মিনিটের টেস্ট",         check: (s) => s.flags.marathon === true },
  { id: "endurance",    icon: "💪", en: "Endurance",         bn: "সহনশীলতা",            descEn: "5+ minute test",            descBn: "৫+ মিনিটের টেস্ট",          check: (s) => s.flags.endurance === true },
  { id: "bilingual",    icon: "🌐", en: "Bilingual",         bn: "দ্বিভাষিক",            descEn: "Test in both English & Bengali", descBn: "ইংরেজি ও বাংলা দুটোতেই টেস্ট", check: (s) => s.flags.usedEn && s.flags.usedBn },
  { id: "bengali_lover",icon: "🇧🇩", en: "Bengali Lover",    bn: "বাংলা প্রেমী",         descEn: "10 Bengali tests",          descBn: "১০টি বাংলা টেস্ট",          check: (s) => (s.flags.bnTestCount || 0) >= 10 },
  { id: "custom_user",  icon: "✏️", en: "Custom User",       bn: "কাস্টম ব্যবহারকারী",  descEn: "Add 5+ custom sentences",   descBn: "৫+ কাস্টম বাক্য যোগ",      check: (s) => (s.customSentences.en.length + s.customSentences.bn.length) >= 5 },
  { id: "mode_master",  icon: "🎮", en: "Mode Master",       bn: "মোড মাস্টার",         descEn: "Try all 3 modes",           descBn: "তিনটি মোডই ব্যবহার",         check: (s) => s.flags.usedWords && s.flags.usedParagraph && s.flags.usedCustom },
  { id: "code_warrior", icon: "💻", en: "Code Warrior",      bn: "কোড যোদ্ধা",           descEn: "Complete a code test",      descBn: "একটি কোড টেস্ট সম্পন্ন",    check: (s) => s.flags.usedCode },
  { id: "polyglot",     icon: "🌍", en: "Polyglot",          bn: "বহুভাষী",              descEn: "Use 5+ code languages",     descBn: "৫+ কোড ভাষা ব্যবহার",       check: (s) => (s.flags.codeLangCount || 0) >= 5 },
  { id: "number_cruncher",icon: "🔢", en: "Number Cruncher", bn: "সংখ্যা বিশ্লেষক",      descEn: "Complete a numbers test",   descBn: "একটি সংখ্যা টেস্ট",         check: (s) => s.flags.usedNumbers },
  { id: "symbol_master",icon: "❗", en: "Symbol Master",     bn: "সিম্বল মাস্টার",      descEn: "Complete a symbols test",   descBn: "একটি সিম্বল টেস্ট",         check: (s) => s.flags.usedSymbols },
  { id: "philosopher",  icon: "📖", en: "Philosopher",       bn: "দার্শনিক",             descEn: "Complete a quotes test",    descBn: "একটি উক্তি টেস্ট",          check: (s) => s.flags.usedQuotes },
  { id: "literate",     icon: "🏛️", en: "Literate",          bn: "সাহিত্যিক",           descEn: "Complete a literature test",descBn: "একটি সাহিত্য টেস্ট",        check: (s) => s.flags.usedLiterature },
  { id: "bengali_driller",icon: "🔤", en: "Bengali Driller", bn: "বাংলা ড্রিলার",       descEn: "Complete a Bengali drill",  descBn: "একটি বাংলা ড্রিল",          check: (s) => s.flags.usedBengaliDrills },
  { id: "level10",      icon: "💎", en: "Rising Star",       bn: "উদীয়মান তারা",        descEn: "Reach Level 10",            descBn: "লেভেল ১০-এ পৌঁছান",        check: (s) => (s.level || 1) >= 10 },
  { id: "level25",      icon: "💠", en: "Expert",            bn: "বিশেষজ্ঞ",            descEn: "Reach Level 25",            descBn: "লেভেল ২৫-এ পৌঁছান",        check: (s) => (s.level || 1) >= 25 }
];

/* ─── 10. LEVEL SYSTEM ────────────────────────────── */
function xpForLevel(level) { return 100 + (level - 1) * 50; }

function xpForNextLevel(totalXP, currentLevel) {
  let lv = currentLevel || 1;
  let used = 0;
  for (let i = 1; i < lv; i++) used += xpForLevel(i);
  const needed = xpForLevel(lv);
  const into = totalXP - used;
  return { into: Math.max(0, into), needed: needed };
}

function getLevelFromXP(totalXP) {
  let lv = 1;
  let used = 0;
  while (true) {
    const need = xpForLevel(lv);
    if (used + need > totalXP) break;
    used += need;
    lv++;
    if (lv > 99) break;
  }
  return lv;
}

/* ─── 11. MODE → LANGUAGE RULES ───────────────────── */
// defaultLang: শুরুর ভাষা, locked: true হলে ইউজার বদলাতে পারবে না
const MODE_LANG_RULES = {
  words:           { defaultLang: "en",  locked: false, dropdownVisible: true },
  paragraph:       { defaultLang: "en",  locked: false, dropdownVisible: true },
  custom:          { defaultLang: "en",  locked: false, dropdownVisible: true },
  code:            { defaultLang: "en",  locked: true,  dropdownVisible: true },
  numbers:         { defaultLang: "en",  locked: false, dropdownVisible: true }, // ★ user বদলাতে পারবে
  symbols:         { defaultLang: "en",  locked: true,  dropdownVisible: false }, // ★ লুকানো
  quotes:          { defaultLang: "en",  locked: false, dropdownVisible: true },
  literature:      { defaultLang: "bn",  locked: true,  dropdownVisible: true },
  bengali_drills:  { defaultLang: "bn",  locked: true,  dropdownVisible: true }
};

/* ─── 12. TRANSLATIONS ────────────────────────────── */
const TRANSLATIONS = {
  en: {
    appTitle: "Typing Practice Pro",
    welcomeTitle: "Typing Practice Pro",
    welcomeSubtitle: "For the love of typing",
    credit1: "Idea & Advisor: Nishat Hossain Badhon",
    credit2: "Crafted by: DeepSeek AI",
    startBtn: "Start", restart: "Restart", mySentences: "My Sentences",
    correct: "Correct", wrong: "Wrong", best: "Best",
    accuracy: "Accuracy", time: "Time", wpm: "WPM",
    resultTitle: "Test Complete!",
    tryAgain: "Try Again", viewStats: "View Stats", copy: "Copy", home: "Home",
    newRecord: "New Record!", xpEarned: "XP Earned",
    savedTitle: "Saved Sentences", savedAddLabel: "➕ Add New Sentence",
    savedAddPlaceholder: "Type a word or sentence to add...",
    savedListLabel: "📋 Saved List",
    addBtn: "Add", cancelEdit: "Cancel Edit", editBtn: "Edit", deleteBtn: "Delete",
    savedEmpty: "No saved sentences yet. Add your first one above!",
    statsTitle: "Statistics",
    tabOverview: "📊 Overview", tabGraph: "📈 Graph", tabHistory: "📜 History",
    avgWpm: "Avg WPM (Last 10)", maxWpm: "Max WPM", bestAcc: "Best Accuracy",
    totalSessions: "Total Sessions", streakLabel: "Streak", consistency: "Consistency",
    days: "days",
    weakKeysTitle: "🔥 Weak Keys (Most Mistakes)",
    noWeakKeys: "🎉 No weak keys! Excellent accuracy!",
    graphLiveTitle: "Live WPM (Last Test)",
    graphDailyTitle: "Daily Average WPM (Last 7 Days)",
    noGraphData: "No data yet. Complete a test to see the graph.",
    clearHistory: "Clear History",
    bestFiveTitle: "🏆 Your Best 5",
    historyTitle: "📜 Recent Tests (Last 20)",
    historyEmpty: "No test history yet. Start typing to build your history!",
    confirmClearHistory: "Clear all test history?",
    toastHistoryCleared: "🗑️ History cleared!",
    toastSessionSaved: "✅ Saved to history!",
    achTitle: "Achievements", achLevelLabel: "Level",
    achUnlockedLabel: "Unlocked", achTotalLabel: "Total", achXpText: "XP",
    achLevelUpTitle: "Level Up!", achLevelUpSub: "Keep going! You're doing great!",
    achToastLabel: "Achievement Unlocked!", achUnlockedToast: "🏆 Achievement Unlocked!",
    aboutTitle: "About & Roadmap",
    fbTitle: "Your Feedback", fbHelp: "Your thoughts help us improve.",
    fbName: "👤 Your Name (optional)", fbRating: "⭐ Rating (optional)",
    fbCat: "🏷️ Category (multiple)", fbComment: "📝 Your Comment *",
    fbSubmit: "Submit & Download", fbClear: "Clear",
    fbNote: "💡 Submitting will download a .txt file.",
    setTitle: "Settings", setLang: "🌐 UI Language", setTheme: "🎨 Theme",
    setSound: "🔊 Sound", setData: "💾 Backup", setReset: "🗑️ Reset All Data",
    setNote: "💾 All data stays on your device.",
    footerText: "Idea & Advisor: Nishat Hossain Badhon | Crafted by: DeepSeek AI",
    toastSaved: "✅ Saved successfully!", toastAdded: "✅ Added!",
    toastUpdated: "✅ Updated!", toastDeleted: "🗑️ Deleted!", toastCleared: "🗑️ Cleared!",
    toastCopied: "📋 Copied to clipboard!", toastExported: "📤 Backup downloaded!",
    toastImported: "📥 Backup imported!", toastReset: "🗑️ All data reset!",
    toastFeedback: "✅ Feedback downloaded! Thank you!",
    toastNoComment: "⚠️ Please write a comment first.",
    toastNoData: "⚠️ Nothing to copy.", toastImportFail: "❌ Invalid file.",
    toastEmptyInput: "⚠️ Please write something first.",
    toastNoCustom: "⚠️ No custom sentences. Add some first!",
    confirmDelete: "Delete this sentence?",
    placeholder: "Start typing...",
    sentencesCount: "sentences",
    placeholderFeedback: "Write your thoughts here..."
  },
  bn: {
    appTitle: "টাইপিং প্র্যাকটিস প্রো",
    welcomeTitle: "টাইপিং প্র্যাকটিস প্রো",
    welcomeSubtitle: "টাইপিং শেখার আনন্দে",
    credit1: "আইডিয়া ও উপদেষ্টা: নিশাত হোসেন বাধন",
    credit2: "তৈরি করেছে: DeepSeek AI",
    startBtn: "শুরু করুন", restart: "আবার শুরু", mySentences: "আমার বাক্য",
    correct: "সঠিক", wrong: "ভুল", best: "সেরা",
    accuracy: "নির্ভুলতা", time: "সময়", wpm: "WPM",
    resultTitle: "টেস্ট সম্পন্ন!",
    tryAgain: "আবার চেষ্টা", viewStats: "পরিসংখ্যান", copy: "কপি", home: "হোম",
    newRecord: "নতুন রেকর্ড!", xpEarned: "XP অর্জিত",
    savedTitle: "সেভ করা বাক্য", savedAddLabel: "➕ নতুন বাক্য যোগ করুন",
    savedAddPlaceholder: "শব্দ বা বাক্য লিখুন...",
    savedListLabel: "📋 সেভ করা তালিকা",
    addBtn: "যোগ করুন", cancelEdit: "এডিট বাতিল", editBtn: "এডিট", deleteBtn: "মুছুন",
    savedEmpty: "এখনো কোনো বাক্য সেভ করা হয়নি। উপরে প্রথমটি যোগ করুন!",
    statsTitle: "পরিসংখ্যান",
    tabOverview: "📊 সারসংক্ষেপ", tabGraph: "📈 গ্রাফ", tabHistory: "📜 ইতিহাস",
    avgWpm: "গড় WPM (শেষ ১০)", maxWpm: "সর্বোচ্চ WPM", bestAcc: "সেরা নির্ভুলতা",
    totalSessions: "মোট সেশন", streakLabel: "স্ট্রিক", consistency: "কনসিস্টেন্সি",
    days: "দিন",
    weakKeysTitle: "🔥 দুর্বল অক্ষর (সবচেয়ে বেশি ভুল)",
    noWeakKeys: "🎉 কোনো দুর্বল অক্ষর নেই! চমৎকার নির্ভুলতা!",
    graphLiveTitle: "লাইভ WPM (শেষ টেস্ট)",
    graphDailyTitle: "দৈনিক গড় WPM (শেষ ৭ দিন)",
    noGraphData: "এখনো কোনো ডেটা নেই। একটা টেস্ট সম্পন্ন করুন।",
    clearHistory: "ইতিহাস মুছুন",
    bestFiveTitle: "🏆 আপনার সেরা ৫",
    historyTitle: "📜 সাম্প্রতিক টেস্ট (শেষ ২০)",
    historyEmpty: "এখনো কোনো টেস্ট ইতিহাস নেই। টাইপ করা শুরু করুন!",
    confirmClearHistory: "সব টেস্ট ইতিহাস মুছে ফেলবেন?",
    toastHistoryCleared: "🗑️ ইতিহাস মুছে ফেলা হয়েছে!",
    toastSessionSaved: "✅ ইতিহাসে সেভ হয়েছে!",
    achTitle: "অ্যাচিভমেন্ট", achLevelLabel: "লেভেল",
    achUnlockedLabel: "আনলকড", achTotalLabel: "মোট", achXpText: "XP",
    achLevelUpTitle: "লেভেল আপ!", achLevelUpSub: "চালিয়ে যাও! তুমি দারুণ করছো!",
    achToastLabel: "অ্যাচিভমেন্ট আনলকড!", achUnlockedToast: "🏆 অ্যাচিভমেন্ট আনলকড!",
    aboutTitle: "পরিচিতি ও রোডম্যাপ",
    fbTitle: "আপনার মতামত", fbHelp: "আপনার মতামত আমাদের উন্নত করতে সাহায্য করে।",
    fbName: "👤 আপনার নাম (ঐচ্ছিক)", fbRating: "⭐ রেটিং (ঐচ্ছিক)",
    fbCat: "🏷️ ক্যাটাগরি (একাধিক)", fbComment: "📝 আপনার মন্তব্য *",
    fbSubmit: "সাবমিট ও ডাউনলোড", fbClear: "মুছুন",
    fbNote: "💡 সাবমিট করলে একটি .txt ফাইল ডাউনলোড হবে।",
    setTitle: "সেটিংস", setLang: "🌐 ইন্টারফেস ভাষা", setTheme: "🎨 থিম",
    setSound: "🔊 সাউন্ড", setData: "💾 ব্যাকআপ", setReset: "🗑️ সব ডেটা রিসেট",
    setNote: "💾 সব ডেটা আপনার ডিভাইসেই থাকে।",
    footerText: "আইডিয়া ও উপদেষ্টা: নিশাত হোসেন বাধন | তৈরি: DeepSeek AI",
    toastSaved: "✅ সফলভাবে সেভ হয়েছে!", toastAdded: "✅ যোগ করা হয়েছে!",
    toastUpdated: "✅ আপডেট হয়েছে!", toastDeleted: "🗑️ মুছে ফেলা হয়েছে!", toastCleared: "🗑️ মুছে ফেলা হয়েছে!",
    toastCopied: "📋 ক্লিপবোর্ডে কপি হয়েছে!", toastExported: "📤 ব্যাকআপ ডাউনলোড হয়েছে!",
    toastImported: "📥 ব্যাকআপ ইমপোর্ট হয়েছে!", toastReset: "🗑️ সব ডেটা রিসেট হয়েছে!",
    toastFeedback: "✅ মতামত ডাউনলোড হয়েছে! ধন্যবাদ!",
    toastNoComment: "⚠️ অনুগ্রহ করে মন্তব্য লিখুন।",
    toastNoData: "⚠️ কপি করার কিছু নেই।", toastImportFail: "❌ ভুল ফাইল।",
    toastEmptyInput: "⚠️ অনুগ্রহ করে কিছু লিখুন।",
    toastNoCustom: "⚠️ কোনো কাস্টম বাক্য নেই। আগে যোগ করুন!",
    confirmDelete: "এই বাক্যটি মুছে ফেলবেন?",
    placeholder: "টাইপ করা শুরু করুন...",
    sentencesCount: "টি বাক্য",
    placeholderFeedback: "এখানে আপনার মতামত লিখুন..."
  }
};

/* ─── 13. STATE ───────────────────────────────────── */
let state = {
  uiLang: "en",
  textLang: "en",
  theme: "dark",
  sound: true,
  customSentences: { en: [], bn: [] },
  bestScores: { en: 0, bn: 0 },
  achievements: [],
  streak: { count: 0, lastDate: null },
  totalSessions: 0,
  bestAccuracy: 0,
  customTab: "en",
  feedbackRating: 0,
  mode: "words",
  history: [],
  weakKeys: {},
  liveChartData: [],
  xp: 0,
  level: 1,
  perfectCount: 0,
  highAccCount: 0,
  flags: {
    earlyBird: false, nightOwl: false, marathon: false, endurance: false,
    usedEn: false, usedBn: false, usedWords: false, usedParagraph: false,
    usedCustom: false, bnTestCount: 0,
    usedCode: false, usedNumbers: false, usedSymbols: false,
    usedQuotes: false, usedLiterature: false, usedBengaliDrills: false,
    codeLangCount: 0, usedCodeLangs: []
  }
};

let test = {
  target: "",
  startTime: null,
  timer: null,
  isRunning: false,
  isFinished: false,
  isPaused: false,
  correctKeys: 0,
  wrongKeys: 0,
  totalKeys: 0,
  lastTyped: "",
  timeLimit: 60,
  elapsed: 0,
  chartPoints: [],
  chartTickCounter: 0
};

let audioCtx = null;
let currentAboutTab = "about";
let currentStatsTab = "overview";
let editingIndex = -1;
let isComposing = false;
let confettiAnimId = null;

/* ─── 14. STORAGE ─────────────────────────────────── */
function saveState() {
  try {
    if (state.history.length > 20) state.history = state.history.slice(0, 20);
    localStorage.setItem("typingProState", JSON.stringify(state));
  } catch (e) { console.error("Save failed", e); }
}

function loadState() {
  try {
    const raw = localStorage.getItem("typingProState");
    if (raw) {
      const loaded = JSON.parse(raw);
      state = Object.assign(state, loaded);
      if (!Array.isArray(state.history)) state.history = [];
      if (typeof state.weakKeys !== "object" || state.weakKeys === null) state.weakKeys = {};
      if (!Array.isArray(state.liveChartData)) state.liveChartData = [];
      if (!Array.isArray(state.achievements)) state.achievements = [];
      if (typeof state.xp !== "number") state.xp = 0;
      if (typeof state.level !== "number") state.level = 1;
      if (typeof state.perfectCount !== "number") state.perfectCount = 0;
      if (typeof state.highAccCount !== "number") state.highAccCount = 0;
      const defaultFlags = {
        earlyBird: false, nightOwl: false, marathon: false, endurance: false,
        usedEn: false, usedBn: false, usedWords: false, usedParagraph: false,
        usedCustom: false, bnTestCount: 0,
        usedCode: false, usedNumbers: false, usedSymbols: false,
        usedQuotes: false, usedLiterature: false, usedBengaliDrills: false,
        codeLangCount: 0, usedCodeLangs: []
      };
      state.flags = Object.assign(defaultFlags, state.flags || {});
      if (!Array.isArray(state.flags.usedCodeLangs)) state.flags.usedCodeLangs = [];
    }
  } catch (e) { console.error("Load failed", e); }
}

/* ─── 15. SOUND ───────────────────────────────────── */
function beep(freq, duration) {
  if (!state.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}
function playWrong() { beep(180, 0.08); }
function playFinish() {
  beep(600, 0.12);
  setTimeout(() => beep(800, 0.12), 120);
  setTimeout(() => beep(1000, 0.20), 240);
}
function playLevelUp() {
  beep(523, 0.15);
  setTimeout(() => beep(659, 0.15), 150);
  setTimeout(() => beep(784, 0.15), 300);
  setTimeout(() => beep(1047, 0.35), 450);
}
function playAchievement() {
  beep(880, 0.12);
  setTimeout(() => beep(1175, 0.20), 120);
}

/* ─── 16. TOAST ───────────────────────────────────── */
let toastTimer = null;
function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = "toast show " + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ─── 17. MODAL HELPERS ───────────────────────────── */
function openModal(id) { document.getElementById(id).classList.add("show"); }
function closeModal(id) { document.getElementById(id).classList.remove("show"); }

/* ─── 18. TRANSLATE UI ────────────────────────────── */
function t(key) { return TRANSLATIONS[state.uiLang][key] || key; }

function applyTranslations() {
  document.documentElement.lang = state.uiLang;
  document.getElementById("appTitle").textContent = t("appTitle");
  document.getElementById("btnRestart").textContent = t("restart");
  document.getElementById("btnCustom").textContent = t("mySentences");
  document.getElementById("btnTryAgain").textContent = t("tryAgain");
  document.getElementById("btnViewStats").textContent = t("viewStats");
  document.getElementById("btnCopy").textContent = t("copy");
  document.getElementById("btnHome").textContent = t("home");
  document.getElementById("welcomeBtnText").textContent = t("startBtn");

  document.getElementById("statsTitle").textContent = t("statsTitle");
  document.getElementById("statsTabOverview").textContent = t("tabOverview");
  document.getElementById("statsTabGraph").textContent = t("tabGraph");
  document.getElementById("statsTabHistory").textContent = t("tabHistory");
  document.getElementById("graphLiveTitle").textContent = t("graphLiveTitle");
  document.getElementById("graphDailyTitle").textContent = t("graphDailyTitle");
  document.getElementById("btnClearHistory").textContent = t("clearHistory");

  document.getElementById("savedTitle").textContent = t("savedTitle");
  document.getElementById("savedAddLabel").textContent = t("savedAddLabel");
  document.getElementById("savedAddInput").placeholder = t("savedAddPlaceholder");
  document.getElementById("savedListLabel").textContent = t("savedListLabel");
  document.getElementById("btnAddSaved").textContent = t("addBtn");
  document.getElementById("btnCancelEdit").textContent = t("cancelEdit");

  document.querySelectorAll(".stat span").forEach((el, i) => {
    const keys = ["wpm", "accuracy", "time", "correct", "wrong", "best"];
    const icons = ["⚡ ", "🎯 ", "⏱️ ", "✅ ", "❌ ", "🏆 "];
    if (el) el.textContent = icons[i] + t(keys[i]);
  });

  document.getElementById("resultTitle").textContent = t("resultTitle");
  document.getElementById("newRecordText").textContent = t("newRecord");
  document.getElementById("aboutTitle").textContent = t("aboutTitle");
  document.getElementById("fbTitle").textContent = t("fbTitle");
  document.getElementById("fbHelp").textContent = t("fbHelp");
  document.getElementById("fbNameLabel").textContent = t("fbName");
  document.getElementById("fbRatingLabel").textContent = t("fbRating");
  document.getElementById("fbCatLabel").textContent = t("fbCat");
  document.getElementById("fbCommentLabel").textContent = t("fbComment");
  document.getElementById("fbSubmit").textContent = t("fbSubmit");
  document.getElementById("fbClear").textContent = t("fbClear");
  document.getElementById("fbNote").textContent = t("fbNote");
  document.getElementById("setTitle").textContent = t("setTitle");
  document.getElementById("setLangLabel").textContent = t("setLang");
  document.getElementById("setThemeLabel").textContent = t("setTheme");
  document.getElementById("setSoundLabel").textContent = t("setSound");
  document.getElementById("setDataLabel").textContent = t("setData");
  document.getElementById("setResetLabel").textContent = t("setReset");
  document.getElementById("setNote").textContent = t("setNote");
  document.getElementById("footerText").textContent = t("footerText");
  document.getElementById("input").placeholder = t("placeholder");

  document.getElementById("achTitle").textContent = t("achTitle");
  document.getElementById("achLevelLabel").textContent = t("achLevelLabel");
  document.getElementById("achUnlockedLabel").textContent = t("achUnlockedLabel");
  document.getElementById("achTotalLabel").textContent = t("achTotalLabel");
  document.getElementById("luTitle").textContent = t("achLevelUpTitle");
  document.getElementById("luSub").textContent = t("achLevelUpSub");
  document.getElementById("atLabel").textContent = t("achToastLabel");

  renderSavedList();
  if (document.getElementById("statsModal").classList.contains("show")) renderStatsPanel();
  if (document.getElementById("achievementsModal").classList.contains("show")) renderAchievements();
  updateLevelBadge();
}

/* ─── 19. THEME ───────────────────────────────────── */
function applyTheme() {
  if (state.theme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  const dark = document.getElementById("themeDark");
  const light = document.getElementById("themeLight");
  if (dark) dark.classList.toggle("active", state.theme === "dark");
  if (light) light.classList.toggle("active", state.theme === "light");
}

function setTheme(theme) {
  state.theme = theme;
  applyTheme();
  saveState();
  if (document.getElementById("statsModal").classList.contains("show") && currentStatsTab === "graph") {
    drawLiveGraph(); drawDailyGraph();
  }
}

/* ─── 20. UI LANGUAGE ─────────────────────────────── */
function setUILang(lang) {
  state.uiLang = lang;
  const en = document.getElementById("uiLangEn");
  const bn = document.getElementById("uiLangBn");
  if (en) en.classList.toggle("active", lang === "en");
  if (bn) bn.classList.toggle("active", lang === "bn");
  applyTranslations();
  renderAboutTab(currentAboutTab);
  saveState();
}

/* ─── 21. SOUND TOGGLE ────────────────────────────── */
function toggleSound() { state.sound = !state.sound; updateSoundUI(); saveState(); }
function setSound(on) { state.sound = on; updateSoundUI(); saveState(); }
function updateSoundUI() {
  const soundBtn = document.getElementById("soundBtn");
  if (soundBtn) {
    soundBtn.textContent = state.sound ? "🔊" : "🔇";
    soundBtn.classList.toggle("active", state.sound);
  }
  const onBtn = document.getElementById("soundOn");
  const offBtn = document.getElementById("soundOff");
  if (onBtn) onBtn.classList.toggle("active", state.sound);
  if (offBtn) offBtn.classList.toggle("active", !state.sound);
}

/* ─── 22. MODE CHANGE (with Language Lock) ────────── */
function onModeChange() {
  state.mode = document.getElementById("modeSelect").value;
  const customWrap = document.getElementById("customSelectorWrap");
  const codeLangWrap = document.getElementById("codeLangWrap");
  const textLangWrap = document.getElementById("textLangWrap");
  const textLangLock = document.getElementById("textLangLock");
  const textLangSelect = document.getElementById("textLangSelect");

  // Reset visibility
  customWrap.classList.add("hidden");
  codeLangWrap.classList.add("hidden");

  if (state.mode === "custom") {
    customWrap.classList.remove("hidden");
    refreshCustomSelector();
  } else if (state.mode === "code") {
    codeLangWrap.classList.remove("hidden");
  }

  // ★ Apply language lock rules
  const rule = MODE_LANG_RULES[state.mode] || MODE_LANG_RULES.words;

  if (!rule.dropdownVisible) {
    // Hide the language dropdown entirely
    textLangWrap.classList.add("hidden");
  } else {
    textLangWrap.classList.remove("hidden");

    if (rule.locked) {
      // Force default language + lock
      textLangSelect.value = rule.defaultLang;
      state.textLang = rule.defaultLang;
      textLangWrap.classList.add("locked");
      textLangLock.classList.remove("hidden");
      textLangSelect.disabled = true;
    } else {
      // Unlock — restore user's chosen language (or default)
      textLangWrap.classList.remove("locked");
      textLangLock.classList.add("hidden");
      textLangSelect.disabled = false;
      // যদি ইউজার আগে বদলে থাকে, সেটাই থাকবে
      if (!textLangSelect.value) {
        textLangSelect.value = rule.defaultLang;
        state.textLang = rule.defaultLang;
      }
    }
  }

  resetTest();
}

// ★ Text Language dropdown বদলালে
function onTextLangChange() {
  const rule = MODE_LANG_RULES[state.mode] || MODE_LANG_RULES.words;
  if (rule.locked) return; // locked হলে কিছু করি না

  const sel = document.getElementById("textLangSelect");
  state.textLang = sel.value;
  saveState();

  if (state.mode === "custom") refreshCustomSelector();
  resetTest();
}

/* ─── 23. CUSTOM SELECTOR ─────────────────────────── */
function getShortPreview(text) {
  const max = 30;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max) + "...";
}

function refreshCustomSelector() {
  const lang = document.getElementById("textLangSelect").value;
  const sel = document.getElementById("customSelector");
  sel.innerHTML = '<option value="__random__">🎲 Random</option>';
  const list = state.customSentences[lang] || [];
  list.forEach((s, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = "📄 " + getShortPreview(s);
    sel.appendChild(opt);
  });
}

/* ─── 24. GENERATE TARGET ─────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWords(lang, diff, count) {
  const pool = WORDS[lang][diff];
  const result = [];
  while (result.length < count) result.push(...shuffle(pool));
  return result.slice(0, count);
}

function pickParagraph(lang, diff) {
  return PARAGRAPHS[lang][diff][Math.floor(Math.random() * PARAGRAPHS[lang][diff].length)];
}

function pickFromArray(arr, count) {
  if (!arr || arr.length === 0) return "";
  const picked = shuffle(arr).slice(0, Math.min(count, arr.length));
  return picked.join(" ");
}

function generateTarget() {
  const lang = document.getElementById("textLangSelect").value;
  const diff = document.getElementById("diffSelect").value;
  const mode = document.getElementById("modeSelect").value;

  if (mode === "words") return pickWords(lang, diff, 30).join(" ");
  if (mode === "paragraph") return pickParagraph(lang, diff);

  if (mode === "custom") {
    const list = state.customSentences[lang] || [];
    if (list.length === 0) {
      return state.uiLang === "bn"
        ? "⚠️ কোনো কাস্টম বাক্য নেই। 📚 বাটনে ক্লিক করে যোগ করুন।"
        : "⚠️ No custom sentences. Click 📚 button to add some.";
    }
    const sel = document.getElementById("customSelector").value;
    if (sel === "__random__") {
      const n = Math.min(list.length, 1 + Math.floor(Math.random() * 3));
      return shuffle(list).slice(0, n).join(" ");
    } else return list[parseInt(sel)] || list[0];
  }

  if (mode === "code") {
    const codeLang = document.getElementById("codeLangSelect").value;
    const pool = CODE_SNIPPETS[codeLang] && CODE_SNIPPETS[codeLang][diff];
    if (!pool || pool.length === 0) {
      return state.uiLang === "bn" ? "⚠️ কোনো কোড নেই।" : "⚠️ No code available.";
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  if (mode === "numbers") {
    // ★ lang অনুযায়ী numbers (en/bn দুটোই আছে)
    const pool = (NUMBERS[lang] && NUMBERS[lang][diff]) || NUMBERS.en[diff] || NUMBERS.en.medium;
    return pickFromArray(pool, 10);
  }

  if (mode === "symbols") {
    const pool = SYMBOLS[diff] || SYMBOLS.medium;
    return pickFromArray(pool, 8);
  }

  if (mode === "quotes") {
    const pool = QUOTES[lang] && QUOTES[lang][diff];
    if (!pool || pool.length === 0) {
      return state.uiLang === "bn" ? "⚠️ কোনো উক্তি নেই।" : "⚠️ No quotes available.";
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  if (mode === "literature") {
    const pool = LITERATURE[diff] || LITERATURE.medium;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  if (mode === "bengali_drills") {
    const pool = BENGALI_DRILLS[diff] || BENGALI_DRILLS.medium;
    return pickFromArray(pool, diff === "easy" ? 15 : 10);
  }

  return "";
}

function maybeExtendTarget() {
  if (state.mode !== "words") return;
  const typed = document.getElementById("input").value;
  const remaining = test.target.length - typed.length;
  if (remaining < 100) {
    const lang = document.getElementById("textLangSelect").value;
    const diff = document.getElementById("diffSelect").value;
    test.target += " " + pickWords(lang, diff, 30).join(" ");
  }
}

/* ─── 25. RENDER TEXT ─────────────────────────────── */
function renderText() {
  const typed = document.getElementById("input").value;
  let html = "";
  for (let i = 0; i < test.target.length; i++) {
    const ch = test.target[i];
    let display = ch;

    if (ch === " ") display = "&nbsp;";
    else if (ch === "\n") display = "↵<br>";
    else if (ch === "<") display = "&lt;";
    else if (ch === ">") display = "&gt;";
    else if (ch === "&") display = "&amp;";

    if (i < typed.length) {
      html += typed[i] === ch
        ? `<span class="correct">${display}</span>`
        : `<span class="wrong">${display}</span>`;
    } else if (i === typed.length) {
      html += `<span class="current">${display}</span>`;
    } else html += display;
  }
  const textEl = document.getElementById("text");
  textEl.innerHTML = html;
  const cursor = textEl.querySelector(".current");
  if (cursor) cursor.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
}

/* ─── 26. TIMER ───────────────────────────────────── */
function startTimer() {
  if (test.timer || test.isFinished) return;
  test.startTime = Date.now();
  test.timer = setInterval(tickTimer, 100);
}

function tickTimer() {
  if (test.isPaused) return;
  test.elapsed = Math.floor((Date.now() - test.startTime) / 1000);
  const limit = test.timeLimit;
  if (limit > 0) {
    const remaining = Math.max(0, limit - test.elapsed);
    document.getElementById("time").textContent = remaining + "s";
    if (remaining <= 0) { finishTest(); return; }
  } else {
    document.getElementById("time").textContent = test.elapsed + "s";
  }
  updateStats();
  recordChartPoint();
}

function recordChartPoint() {
  test.chartTickCounter++;
  if (test.chartTickCounter < 10) return;
  test.chartTickCounter = 0;
  const elapsedMin = Math.max(test.elapsed / 60, 1 / 60);
  const wpm = Math.round((test.correctKeys / 5) / elapsedMin);
  test.chartPoints.push({ t: test.elapsed, wpm: isFinite(wpm) ? wpm : 0 });
}

/* ─── 27. UPDATE STATS ────────────────────────────── */
function updateStats() {
  const elapsedMin = Math.max(test.elapsed / 60, 1 / 60);
  const wpm = Math.round((test.correctKeys / 5) / elapsedMin);
  const total = test.correctKeys + test.wrongKeys;
  const acc = total === 0 ? 100 : Math.round((test.correctKeys / total) * 100);
  document.getElementById("wpm").textContent = isFinite(wpm) ? wpm : 0;
  document.getElementById("acc").textContent = acc + "%";
  document.getElementById("correctCount").textContent = test.correctKeys;
  document.getElementById("wrongCount").textContent = test.wrongKeys;
  document.getElementById("bestScore").textContent =
    Math.max(state.bestScores.en, state.bestScores.bn) || 0;
}

/* ─── 28. INPUT HANDLING (Textarea) ───────────────── */
function handleInput(e) {
  if (isComposing) return;
  const input = document.getElementById("input");
  const typed = input.value.normalize('NFKC');
  const target = test.target.normalize('NFKC');
  if (test.isFinished) return;
  if (!test.isRunning && typed.length > 0) { test.isRunning = true; startTimer(); }
  const prevLen = test.lastTyped.length;
  if (typed.length > prevLen) {
    const newChars = typed.slice(prevLen);
    for (let i = 0; i < newChars.length; i++) {
      const idx = prevLen + i;
      if (idx < target.length) {
        if (newChars[i] === target[idx]) test.correctKeys++;
        else {
          test.wrongKeys++;
          playWrong();
          const expected = target[idx];
          if (expected && expected.trim()) {
            state.weakKeys[expected] = (state.weakKeys[expected] || 0) + 1;
          }
        }
      }
    }
  } else if (typed.length < prevLen) {
    const removed = prevLen - typed.length;
    for (let i = 0; i < removed; i++) {
      const idx = prevLen - 1 - i;
      if (idx < target.length) {
        if (target[idx] === test.lastTyped[idx]) { if (test.correctKeys > 0) test.correctKeys--; }
        else { if (test.wrongKeys > 0) test.wrongKeys--; }
      }
    }
  }
  test.lastTyped = typed;

  // ★ Auto-resize textarea
  autoResizeTextarea(input);

  if (typed.length >= target.length) {
    if (test.timeLimit === 0 || state.mode !== "words") { finishTest(); return; }
  }
  maybeExtendTarget();
  renderText();
  updateStats();
}

function autoResizeTextarea(el) {
  el.style.height = "auto";
  const newH = Math.min(el.scrollHeight, 200);
  el.style.height = newH + "px";
}

/* ─── 29. FINISH TEST ─────────────────────────────── */
function finishTest() {
  if (test.isFinished) return;
  test.isFinished = true;
  test.isRunning = false;
  if (test.timer) { clearInterval(test.timer); test.timer = null; }
  playFinish();

  const elapsedMin = Math.max(test.elapsed / 60, 1 / 60);
  const wpm = Math.round((test.correctKeys / 5) / elapsedMin);
  const cpm = Math.round(test.correctKeys / elapsedMin);
  const total = test.correctKeys + test.wrongKeys;
  const acc = total === 0 ? 100 : Math.round((test.correctKeys / total) * 100);

  state.totalSessions++;
  if (acc > state.bestAccuracy) state.bestAccuracy = acc;
  if (acc === 100 && total > 0) state.perfectCount = (state.perfectCount || 0) + 1;
  if (acc >= 90) state.highAccCount = (state.highAccCount || 0) + 1;

  const lang = document.getElementById("textLangSelect").value;
  const scoreModes = ["words", "paragraph", "custom", "quotes", "literature"];
  const isNewRecord = scoreModes.includes(state.mode) && wpm > (state.bestScores[lang] || 0);
  if (isNewRecord) state.bestScores[lang] = wpm;

  const today = new Date().toDateString();
  if (state.streak.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.streak.lastDate === yesterday) state.streak.count++;
    else state.streak.count = 1;
    state.streak.lastDate = today;
  }

  const hour = new Date().getHours();
  if (hour < 7) state.flags.earlyBird = true;
  if (hour >= 23) state.flags.nightOwl = true;
  if (test.elapsed >= 600) state.flags.marathon = true;
  if (test.elapsed >= 300) state.flags.endurance = true;
  if (lang === "en" && scoreModes.includes(state.mode)) state.flags.usedEn = true;
  if (lang === "bn" && scoreModes.includes(state.mode)) {
    state.flags.usedBn = true;
    state.flags.bnTestCount = (state.flags.bnTestCount || 0) + 1;
  }
  if (state.mode === "words") state.flags.usedWords = true;
  if (state.mode === "paragraph") state.flags.usedParagraph = true;
  if (state.mode === "custom") state.flags.usedCustom = true;
  if (state.mode === "code") {
    state.flags.usedCode = true;
    const cl = document.getElementById("codeLangSelect").value;
    if (!state.flags.usedCodeLangs.includes(cl)) {
      state.flags.usedCodeLangs.push(cl);
      state.flags.codeLangCount = state.flags.usedCodeLangs.length;
    }
  }
  if (state.mode === "numbers") state.flags.usedNumbers = true;
  if (state.mode === "symbols") state.flags.usedSymbols = true;
  if (state.mode === "quotes") state.flags.usedQuotes = true;
  if (state.mode === "literature") state.flags.usedLiterature = true;
  if (state.mode === "bengali_drills") state.flags.usedBengaliDrills = true;

  const xpGain = Math.max(5, Math.round((wpm * acc) / 100));
  const oldLevel = state.level;
  state.xp = (state.xp || 0) + xpGain;
  state.level = getLevelFromXP(state.xp);

  const modeLabel = modeDisplayName(state.mode);
  state.history.unshift({
    date: new Date().toISOString(),
    wpm: isFinite(wpm) ? wpm : 0,
    acc: acc, cpm: isFinite(cpm) ? cpm : 0,
    mode: modeLabel, lang: lang, time: test.elapsed
  });
  if (state.history.length > 20) state.history = state.history.slice(0, 20);

  state.liveChartData = [...test.chartPoints];
  if (state.liveChartData.length === 0) {
    state.liveChartData = [{ t: test.elapsed, wpm: isFinite(wpm) ? wpm : 0 }];
  }

  const newlyUnlocked = checkAchievements();
  saveState();

  document.getElementById("rWpm").textContent = isFinite(wpm) ? wpm : 0;
  document.getElementById("rAcc").textContent = acc + "%";
  document.getElementById("rTime").textContent = test.elapsed + "s";
  document.getElementById("rCorrect").textContent = test.correctKeys;
  document.getElementById("rWrong").textContent = test.wrongKeys;
  document.getElementById("rCpm").textContent = isFinite(cpm) ? cpm : 0;
  document.getElementById("rXp").textContent = "+" + xpGain;

  const newRecordEl = document.getElementById("newRecord");
  if (isNewRecord && wpm > 0) newRecordEl.classList.remove("hidden");
  else newRecordEl.classList.add("hidden");

  document.getElementById("input").disabled = true;
  openModal("resultModal");
  showToast(t("toastSessionSaved"), "success");

  setTimeout(() => {
    if (state.level > oldLevel) showLevelUp(state.level);
    if (newlyUnlocked.length > 0) showAchievementToasts(newlyUnlocked);
  }, 800);
}

function modeDisplayName(mode) {
  const map = {
    words: "Words", paragraph: "Paragraph", custom: "Custom",
    code: "Code", numbers: "Numbers", symbols: "Symbols",
    quotes: "Quotes", literature: "Literature", bengali_drills: "Bengali Drills"
  };
  return map[mode] || mode;
}

/* ─── 30. ACHIEVEMENTS LOGIC ──────────────────────── */
function checkAchievements() {
  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach(a => {
    if (!state.achievements.includes(a.id) && a.check(state)) {
      state.achievements.push(a.id);
      newlyUnlocked.push(a);
    }
  });
  return newlyUnlocked;
}

function showAchievementToasts(achievements) {
  let delay = 0;
  achievements.forEach((a) => {
    setTimeout(() => {
      const toast = document.getElementById("achToast");
      const nameEl = document.getElementById("atName");
      const iconEl = document.getElementById("atIcon");
      const labelEl = document.getElementById("atLabel");
      const name = state.uiLang === "bn" ? a.bn : a.en;
      iconEl.textContent = a.icon;
      nameEl.textContent = name;
      labelEl.textContent = t("achToastLabel");
      toast.classList.remove("hidden", "hide");
      void toast.offsetWidth;
      toast.classList.add("show");
      playAchievement();
      setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
          toast.classList.add("hidden");
          toast.classList.remove("show", "hide");
        }, 400);
      }, 2800);
    }, delay);
    delay += 3200;
  });
}

/* ─── 31. LEVEL UI ────────────────────────────────── */
function updateLevelBadge() {
  document.getElementById("levelNum").textContent = state.level || 1;
  document.getElementById("xpNum").textContent = state.xp || 0;
  const lp = xpForNextLevel(state.xp || 0, state.level || 1);
  const pct = Math.min(100, Math.round((lp.into / lp.needed) * 100));
  const fill = document.getElementById("levelProgressFill");
  if (fill) fill.style.width = pct + "%";
  const lvlEl = document.getElementById("achLevelNum");
  if (lvlEl) lvlEl.textContent = state.level || 1;
  const xpEl = document.getElementById("achXpText");
  if (xpEl) xpEl.textContent = `${lp.into} / ${lp.needed} XP`;
  const unlockedEl = document.getElementById("achUnlockedCount");
  if (unlockedEl) unlockedEl.textContent = state.achievements.length;
  const totalEl = document.getElementById("achTotalCount");
  if (totalEl) totalEl.textContent = ACHIEVEMENTS.length;
}

function showLevelUp(level) {
  document.getElementById("luLevel").textContent = "Level " + level;
  const popup = document.getElementById("levelUpPopup");
  popup.classList.remove("hidden");
  playLevelUp();
  startConfetti();
}

function closeLevelUp() {
  document.getElementById("levelUpPopup").classList.add("hidden");
  stopConfetti();
}

/* ─── 32. CONFETTI ────────────────────────────────── */
let confettiParticles = [];

function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  ctx.scale(dpr, dpr);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const colors = ["#89b4fa", "#a6e3a1", "#f9e2af", "#f38ba8", "#cba6f7", "#fab387"];
  confettiParticles = [];
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: Math.random() * w, y: Math.random() * h - h,
      vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 3,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      shape: Math.random() < 0.5 ? "rect" : "circle"
    });
  }
  function loop() {
    ctx.clearRect(0, 0, w, h);
    confettiParticles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.rotation += p.rotationSpeed;
      if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; p.vy = 2 + Math.random() * 3; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      if (p.shape === "rect") ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      else { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    confettiAnimId = requestAnimationFrame(loop);
  }
  loop();
}

function stopConfetti() {
  if (confettiAnimId) { cancelAnimationFrame(confettiAnimId); confettiAnimId = null; }
  confettiParticles = [];
  const canvas = document.getElementById("confettiCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* ─── 33. ACHIEVEMENTS MODAL ──────────────────────── */
function openAchievementsModal() {
  renderAchievements();
  openModal("achievementsModal");
  updateLevelBadge();
}

function renderAchievements() {
  const grid = document.getElementById("achievementsGrid");
  const bn = state.uiLang === "bn";
  let html = "";
  ACHIEVEMENTS.forEach(a => {
    const unlocked = state.achievements.includes(a.id);
    const name = bn ? a.bn : a.en;
    const desc = bn ? a.descBn : a.descEn;
    html += `
      <div class="ach-item ${unlocked ? "unlocked" : "locked"}">
        <span class="ach-icon">${a.icon}</span>
        <div class="ach-name">${name}</div>
        <div class="ach-desc">${desc}</div>
      </div>`;
  });
  grid.innerHTML = html;
  updateLevelBadge();
}

/* ─── 34. RESET TEST ──────────────────────────────── */
function resetTest() {
  if (test.timer) { clearInterval(test.timer); test.timer = null; }
  test.isRunning = false; test.isFinished = false; test.isPaused = false;
  test.correctKeys = 0; test.wrongKeys = 0; test.totalKeys = 0;
  test.lastTyped = ""; test.startTime = null; test.elapsed = 0;
  test.chartPoints = []; test.chartTickCounter = 0;

  test.timeLimit = parseInt(document.getElementById("timeSelect").value) || 0;
  const input = document.getElementById("input");
  input.value = "";
  input.disabled = false;
  input.style.height = "auto";
  input.focus();

  test.target = generateTarget();

  // ★ Apply code-mode class
  const textEl = document.getElementById("text");
  if (state.mode === "code") {
    textEl.classList.add("code-mode");
    input.classList.add("code-mode");
  } else {
    textEl.classList.remove("code-mode");
    input.classList.remove("code-mode");
  }

  const timeEl = document.getElementById("time");
  timeEl.textContent = test.timeLimit > 0 ? (test.timeLimit + "s") : "0s";
  document.getElementById("pauseBtn").textContent = "⏸️";
  renderText();
  updateStats();
}

/* ─── 35. PAUSE ───────────────────────────────────── */
function togglePause() {
  if (test.isFinished || !test.isRunning) return;
  test.isPaused = !test.isPaused;
  const btn = document.getElementById("pauseBtn");
  btn.textContent = test.isPaused ? "▶️" : "⏸️";
  const input = document.getElementById("input");
  input.disabled = test.isPaused;
  if (!test.isPaused) input.focus();
}

/* ─── 36. STATS MODAL ─────────────────────────────── */
function openStatsModal() { renderStatsPanel(); openModal("statsModal"); }
function switchStatsTab(tab, btn) {
  currentStatsTab = tab;
  document.querySelectorAll(".stab").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.getElementById("statsOverview").classList.toggle("hidden", tab !== "overview");
  document.getElementById("statsGraph").classList.toggle("hidden", tab !== "graph");
  document.getElementById("statsHistory").classList.toggle("hidden", tab !== "history");
  renderStatsPanel();
}

function renderStatsPanel() {
  if (currentStatsTab === "overview") renderOverview();
  else if (currentStatsTab === "graph") { drawLiveGraph(); drawDailyGraph(); }
  else if (currentStatsTab === "history") renderHistory();
}

function renderOverview() {
  const container = document.getElementById("statsOverview");
  const hist = state.history;
  const last10 = hist.slice(0, 10);
  const avgWpm = last10.length > 0 ? Math.round(last10.reduce((s, h) => s + h.wpm, 0) / last10.length) : 0;
  const maxWpm = Math.max(state.bestScores.en, state.bestScores.bn, 0);
  const bestAcc = state.bestAccuracy || 0;
  const total = state.totalSessions || 0;
  const streak = state.streak.count || 0;
  let consistency = 100;
  if (last10.length >= 2) {
    const mean = last10.reduce((s, h) => s + h.wpm, 0) / last10.length;
    const variance = last10.reduce((s, h) => s + Math.pow(h.wpm - mean, 2), 0) / last10.length;
    const stdDev = Math.sqrt(variance);
    if (mean > 0) consistency = Math.max(0, Math.round(100 - (stdDev / mean) * 100));
  }
  const weakArr = Object.entries(state.weakKeys)
    .filter(([k, v]) => v > 0 && k.trim())
    .sort((a, b) => b[1] - a[1]).slice(0, 5);
  const isBn = state.uiLang === "bn";
  let weakHtml = weakArr.length === 0
    ? `<div class="no-weak-keys">${t("noWeakKeys")}</div>`
    : `<div class="weak-keys-list">` + weakArr.map(([k, v]) => `
        <div class="weak-key-item">
          <div class="weak-key-char">${escapeHtml(k)}</div>
          <div class="weak-key-count">${v} ${isBn ? "ভুল" : "wrong"}</div>
        </div>`).join("") + `</div>`;

  container.innerHTML = `
    <div class="overview-grid">
      <div class="overview-card"><div class="overview-icon">📉</div><div class="overview-label">${t("avgWpm")}</div><div class="overview-value">${avgWpm}</div></div>
      <div class="overview-card"><div class="overview-icon">🏆</div><div class="overview-label">${t("maxWpm")}</div><div class="overview-value">${maxWpm}</div></div>
      <div class="overview-card"><div class="overview-icon">🎯</div><div class="overview-label">${t("bestAcc")}</div><div class="overview-value">${bestAcc}%</div></div>
      <div class="overview-card"><div class="overview-icon">📅</div><div class="overview-label">${t("totalSessions")}</div><div class="overview-value">${total}</div></div>
      <div class="overview-card"><div class="overview-icon">🔥</div><div class="overview-label">${t("streakLabel")}</div><div class="overview-value">${streak} ${t("days")}</div></div>
      <div class="overview-card"><div class="overview-icon">⚡</div><div class="overview-label">${t("consistency")}</div><div class="overview-value">${consistency}%</div></div>
    </div>
    <div class="weak-keys-section">
      <h3 class="section-title">${t("weakKeysTitle")}</h3>
      ${weakHtml}
    </div>
  `;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function drawLiveGraph() {
  const canvas = document.getElementById("liveGraphCanvas");
  if (!canvas) return;
  drawLineGraph(canvas, state.liveChartData || [], {
    emptyMsg: t("noGraphData"),
    xLabel: state.uiLang === "bn" ? "সময় (s)" : "Time (s)",
    color: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
  });
}

function drawDailyGraph() {
  const canvas = document.getElementById("dailyGraphCanvas");
  if (!canvas) return;
  const daily = {};
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    daily[d.toISOString().slice(0, 10)] = { date: d, wpms: [] };
  }
  state.history.forEach(h => {
    const key = new Date(h.date).toISOString().slice(0, 10);
    if (daily[key]) daily[key].wpms.push(h.wpm);
  });
  const points = Object.values(daily).map((d, idx) => ({
    t: idx + 1,
    wpm: d.wpms.length > 0 ? Math.round(d.wpms.reduce((a, b) => a + b, 0) / d.wpms.length) : 0,
    label: d.date.toLocaleDateString(state.uiLang === "bn" ? "bn-BD" : "en-US", { weekday: 'short' })
  }));
  drawLineGraph(canvas, points, {
    emptyMsg: t("noGraphData"),
    color: getComputedStyle(document.documentElement).getPropertyValue('--correct').trim(),
    labels: points.map(p => p.label)
  });
}

function drawLineGraph(canvas, data, opts = {}) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);

  if (!data || data.length === 0) {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-dim').trim();
    ctx.font = "14px 'Segoe UI', sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(opts.emptyMsg || "No data", w / 2, h / 2);
    return;
  }

  const padding = { top: 20, right: 20, bottom: 35, left: 45 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const values = data.map(d => d.wpm);
  const maxVal = Math.max(...values, 10);
  const minVal = 0;
  const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--graph-grid').trim();
  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--graph-text').trim();
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  ctx.fillStyle = textColor;
  ctx.font = "11px 'Segoe UI', sans-serif";
  ctx.textAlign = "right"; ctx.textBaseline = "middle";
  const gridLines = 4;
  for (let i = 0; i <= gridLines; i++) {
    const y = padding.top + (chartH / gridLines) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    const val = Math.round(maxVal - (maxVal - minVal) * (i / gridLines));
    ctx.fillText(val, padding.left - 8, y);
  }
  if (opts.xLabel) {
    ctx.textAlign = "center";
    ctx.fillText(opts.xLabel, padding.left + chartW / 2, h - 8);
  }
  const color = opts.color || "#89b4fa";
  const points = data.map((d, i) => {
    const x = padding.left + (chartW * (data.length === 1 ? 0.5 : i / (data.length - 1)));
    const y = padding.top + chartH - ((d.wpm - minVal) / (maxVal - minVal)) * chartH;
    return { x, y };
  });
  const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
  grad.addColorStop(0, hexToRgba(color, 0.3));
  grad.addColorStop(1, hexToRgba(color, 0.02));
  ctx.beginPath();
  ctx.moveTo(points[0].x, padding.top + chartH);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();
  ctx.fillStyle = color;
  points.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill();
  });
  if (opts.labels && opts.labels.length === points.length) {
    ctx.fillStyle = textColor;
    ctx.font = "10px 'Segoe UI', sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    points.forEach((p, i) => {
      if (data.length <= 10 || i % Math.ceil(data.length / 8) === 0) {
        ctx.fillText(opts.labels[i], p.x, padding.top + chartH + 6);
      }
    });
  }
}

function hexToRgba(hex, alpha) {
  if (hex.startsWith("rgb")) {
    const nums = hex.match(/\d+/g);
    if (nums && nums.length >= 3) return `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, ${alpha})`;
  }
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderHistory() {
  const bestSection = document.getElementById("bestSection");
  const listEl = document.getElementById("historyList");
  const sortedByWpm = [...state.history].sort((a, b) => b.wpm - a.wpm);
  const best5 = sortedByWpm.slice(0, 5);
  if (best5.length > 0) {
    bestSection.innerHTML = `
      <h3 class="section-title">${t("bestFiveTitle")}</h3>
      <div class="best-list">
        ${best5.map((h, i) => {
          const medal = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"][i] || "•";
          const dateStr = new Date(h.date).toLocaleDateString(state.uiLang === "bn" ? "bn-BD" : "en-US", { day: '2-digit', month: 'short', year: 'numeric' });
          return `<div class="best-item"><span class="best-rank">${medal}</span><span class="best-wpm">${h.wpm}</span><span class="best-info">${h.acc}% · ${h.mode} · ${h.lang.toUpperCase()} · ${dateStr}</span></div>`;
        }).join("")}
      </div>`;
  } else bestSection.innerHTML = "";

  if (state.history.length === 0) {
    listEl.innerHTML = `<div class="history-empty">${t("historyEmpty")}</div>`;
    return;
  }
  listEl.innerHTML = `<h3 class="section-title">${t("historyTitle")}</h3>` +
    state.history.map(h => {
      const d = new Date(h.date);
      const dateStr = d.toLocaleDateString(state.uiLang === "bn" ? "bn-BD" : "en-US", { day: '2-digit', month: 'short' });
      const timeStr = d.toLocaleTimeString(state.uiLang === "bn" ? "bn-BD" : "en-US", { hour: '2-digit', minute: '2-digit' });
      return `<div class="history-item"><span class="history-date">${dateStr} ${timeStr}</span><span class="history-wpm">${h.wpm}</span><span class="history-acc">${h.acc}%</span><span class="history-mode">${h.mode}</span><span class="history-mode">${h.lang.toUpperCase()}</span></div>`;
    }).join("");
}

function clearHistory() {
  if (!confirm(t("confirmClearHistory"))) return;
  state.history = [];
  state.liveChartData = [];
  saveState();
  renderHistory();
  showToast(t("toastHistoryCleared"), "success");
}

/* ─── 37. SAVED SENTENCES ─────────────────────────── */
function openSavedModal() {
  cancelEdit();
  document.getElementById("savedAddInput").value = "";
  renderSavedList();
  openModal("savedModal");
}

function switchSavedTab(lang) {
  state.customTab = lang;
  document.getElementById("stabEn").classList.toggle("active", lang === "en");
  document.getElementById("stabBn").classList.toggle("active", lang === "bn");
  cancelEdit();
  renderSavedList();
  saveState();
}

function addSavedSentence() {
  const input = document.getElementById("savedAddInput");
  const text = input.value.trim();
  if (!text) { showToast(t("toastEmptyInput"), "error"); return; }
  const lang = state.customTab;
  if (!state.customSentences[lang]) state.customSentences[lang] = [];
  if (editingIndex >= 0) {
    state.customSentences[lang][editingIndex] = text;
    showToast(t("toastUpdated"), "success");
    cancelEdit();
  } else {
    state.customSentences[lang].push(text);
    showToast(t("toastAdded"), "success");
  }
  input.value = "";
  saveState();
  renderSavedList();
  refreshCustomSelector();
}

function renderSavedList() {
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  const container = document.getElementById("savedList");
  const countEl = document.getElementById("savedListCount");
  countEl.textContent = list.length;
  if (list.length === 0) {
    container.innerHTML = `<div class="saved-list-empty">${t("savedEmpty")}</div>`;
    return;
  }
  let html = "";
  list.forEach((text, i) => {
    const safe = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html += `<div class="saved-item"><span class="saved-item-num">${i + 1}.</span><span class="saved-item-text">${safe}</span><div class="saved-item-actions"><button class="icon-btn" onclick="editSaved(${i})" title="${t("editBtn")}">✏️</button><button class="icon-btn delete" onclick="deleteSaved(${i})" title="${t("deleteBtn")}">🗑️</button></div></div>`;
  });
  container.innerHTML = html;
}

function editSaved(index) {
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  if (!list[index]) return;
  editingIndex = index;
  document.getElementById("savedAddInput").value = list[index];
  document.getElementById("savedAddInput").focus();
  document.getElementById("cancelEditBtn").classList.remove("hidden");
  document.getElementById("btnAddSaved").textContent = "💾 " + t("editBtn");
}

function cancelEdit() {
  editingIndex = -1;
  const inp = document.getElementById("savedAddInput");
  if (inp) inp.value = "";
  const cancelBtn = document.getElementById("cancelEditBtn");
  if (cancelBtn) cancelBtn.classList.add("hidden");
  const addBtn = document.getElementById("btnAddSaved");
  if (addBtn) addBtn.textContent = t("addBtn");
}

function deleteSaved(index) {
  if (!confirm(t("confirmDelete"))) return;
  const lang = state.customTab;
  const list = state.customSentences[lang] || [];
  list.splice(index, 1);
  state.customSentences[lang] = list;
  saveState();
  renderSavedList();
  refreshCustomSelector();
  showToast(t("toastDeleted"), "success");
}

/* ─── 38. ABOUT TABS ──────────────────────────────── */
function switchAboutTab(tab, btn) {
  currentAboutTab = tab;
  document.querySelectorAll(".atab").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderAboutTab(tab);
}

function renderAboutTab(tab) {
  const body = document.getElementById("aboutBody");
  const bn = state.uiLang === "bn";
  if (tab === "about") {
    body.innerHTML = `
      <div class="about-section">
        <h3>📖 ${bn ? "পরিচিতি" : "About"}</h3>
        <p>${bn ? "টাইপিং প্র্যাকটিস প্রো একটি আধুনিক, দ্রুত এবং সম্পূর্ণ অফলাইন টাইপিং প্র্যাকটিস অ্যাপ।" : "Typing Practice Pro is a modern, fast and fully offline typing practice app."}</p>
        <p>${bn ? "এই অ্যাপটি ভালোবাসা দিয়ে তৈরি করেছেন <strong>নিশাত হোসেন বাধন</strong> এর আইডিয়া ও তত্ত্বাবধানে, এবং কোড করেছেন <strong>DeepSeek AI</strong>।" : "This app was crafted with love under the idea and guidance of <strong>Nishat Hossain Badhon</strong>, and coded by <strong>DeepSeek AI</strong>."}</p>
      </div>
      <div class="about-section">
        <h3>✨ ${bn ? "বৈশিষ্ট্য" : "Features"}</h3>
        <ul class="about-feature-list">
          <li>⚡ ${bn ? "রিয়েল-টাইম WPM, CPM, Accuracy" : "Real-time WPM, CPM, Accuracy"}</li>
          <li>📝 ${bn ? "৯টি মোড" : "9 modes"}</li>
          <li>💻 ${bn ? "৯টি কোড ভাষা" : "9 code languages"}</li>
          <li>📊 ${bn ? "পরিসংখ্যান, গ্রাফ ও ইতিহাস" : "Statistics, graphs & history"}</li>
          <li>🏆 ${bn ? "৩০+ অ্যাচিভমেন্ট, লেভেল ও XP" : "30+ achievements, levels & XP"}</li>
          <li>🌐 ${bn ? "ইংরেজি ও বাংলা সাপোর্ট" : "English & Bengali support"}</li>
        </ul>
      </div>`;
  } else if (tab === "v1") {
    body.innerHTML = `<div class="about-version-title">✨ Version 1.x</div><div class="about-version-tag">${bn ? "প্রাথমিক রিলিজ" : "Initial Releases"}</div><ul class="about-feature-list"><li>✅ ${bn ? "মূল টাইপিং ইঞ্জিন" : "Core typing engine"}</li><li>✅ ${bn ? "Saved Sentences সিস্টেম" : "Saved Sentences system"}</li><li>✅ ${bn ? "অভ্র/বিজয় সাপোর্ট" : "Avro/Bijoy support"}</li></ul>`;
  } else if (tab === "v2") {
    body.innerHTML = `<div class="about-version-title">🚀 Version 2.0</div><div class="about-version-tag">${bn ? "পরিসংখ্যান, গেমিফিকেশন ও কনটেন্ট" : "Statistics, Gamification & Content"}</div><ul class="about-feature-list"><li>✅ ${bn ? "📊 Statistics" : "📊 Statistics"}</li><li>✅ ${bn ? "🏆 ৩০+ অ্যাচিভমেন্ট" : "🏆 30+ achievements"}</li><li>✅ ${bn ? "💎 লেভেল সিস্টেম ও XP" : "💎 Level system & XP"}</li><li>✅ ${bn ? "💻 ৯টি কোড ভাষা" : "💻 9 code languages"}</li><li>✅ ${bn ? "🔢 Numbers (ইংরেজি + বাংলা)" : "🔢 Numbers (English + Bengali)"}</li><li>✅ ${bn ? "📖 Quotes, 🏛️ Literature" : "📖 Quotes, 🏛️ Literature"}</li><li>✅ ${bn ? "🔤 Bengali Drills" : "🔤 Bengali Drills"}</li><li>✅ ${bn ? "🔒 Language Auto-Lock" : "🔒 Language Auto-Lock"}</li></ul>`;
  } else if (tab === "v3") {
    body.innerHTML = `<div class="about-version-title">🌌 Version 3.0</div><div class="about-version-tag">${bn ? "Visual & Sound Upgrade" : "Visual & Sound Upgrade"}</div><ul class="about-feature-list"><li>⏳ ${bn ? "🎉 কনফেটি ও অ্যানিমেশন" : "🎉 Confetti & animations"}</li><li>⏳ ${bn ? "🌈 আরও থিম" : "🌈 More themes"}</li><li>⏳ ${bn ? "🔤 ফন্ট সাইজ কন্ট্রোল" : "🔤 Font size control"}</li><li>⏳ ${bn ? "🎵 সাউন্ড ইফেক্ট" : "🎵 Sound effects"}</li></ul>`;
  } else if (tab === "v4") {
    body.innerHTML = `<div class="about-version-title">💎 Version 4.0</div><div class="about-version-tag">Ultimate Edition</div><ul class="about-feature-list"><li>⏳ ${bn ? "৩ডি ইন্টারফেস" : "3D interface"}</li><li>⏳ ${bn ? "টাইপিং কোর্স মোড" : "Typing course mode"}</li></ul>`;
  }
}

/* ─── 39. FEEDBACK ────────────────────────────────── */
function submitFeedback() {
  const comment = document.getElementById("fbComment").value.trim();
  if (!comment) { showToast(t("toastNoComment"), "error"); return; }
  const name = document.getElementById("fbName").value.trim() || "(anonymous)";
  const rating = state.feedbackRating || 0;
  const cats = Array.from(document.querySelectorAll("#catRow input:checked")).map(c => c.value);
  const catStr = cats.length ? cats.join(", ") : "(none)";
  let txt = "═══════════════════════════════════════\n  Typing Practice Pro — Feedback\n═══════════════════════════════════════\n\n";
  txt += `Date    : ${new Date().toLocaleString()}\nName    : ${name}\nRating  : ${rating ? "★".repeat(rating) + "☆".repeat(5 - rating) : "(none)"}\nCategory: ${catStr}\n\n`;
  txt += "Comment :\n" + comment + "\n\n───────────────────────────────────────\nThank you for your feedback!\n";
  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `typing_pro_feedback_${Date.now()}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t("toastFeedback"), "success");
}

function clearFeedback() {
  document.getElementById("fbName").value = "";
  document.getElementById("fbComment").value = "";
  state.feedbackRating = 0;
  document.querySelectorAll(".star").forEach(s => { s.textContent = "☆"; s.classList.remove("active"); });
  document.querySelectorAll("#catRow input").forEach(c => c.checked = false);
}

/* ─── 40. BACKUP ──────────────────────────────────── */
function exportData() {
  const data = { version: "2.0-step3-fixed", exportedAt: new Date().toISOString(), state: state };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `typing_pro_backup_${Date.now()}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t("toastExported"), "success");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.state) {
        state = Object.assign(state, data.state);
        saveState(); applyTranslations(); applyTheme(); updateSoundUI();
        showToast(t("toastImported"), "success");
        location.reload();
      } else showToast(t("toastImportFail"), "error");
    } catch (err) { showToast(t("toastImportFail"), "error"); }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetAllData() {
  if (!confirm(state.uiLang === "bn" ? "সব ডেটা মুছে ফেলবেন?" : "Reset ALL data?")) return;
  localStorage.removeItem("typingProState");
  location.reload();
}

/* ─── 41. COPY RESULT ─────────────────────────────── */
function copyResult() {
  const text = `
⚡ Typing Practice Pro — Result
─────────────────────────────
WPM      : ${document.getElementById("rWpm").textContent}
Accuracy : ${document.getElementById("rAcc").textContent}
Time     : ${document.getElementById("rTime").textContent}
Correct  : ${document.getElementById("rCorrect").textContent}
Wrong    : ${document.getElementById("rWrong").textContent}
CPM      : ${document.getElementById("rCpm").textContent}
XP       : ${document.getElementById("rXp").textContent}
  `.trim();
  navigator.clipboard.writeText(text).then(() => showToast(t("toastCopied"), "success"))
    .catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
      showToast(t("toastCopied"), "success");
    });
}

/* ─── 42. WELCOME SCREEN ──────────────────────────── */
function runWelcomeAnimation() {
  const title = document.getElementById("welcomeTitle");
  const subtitle = document.getElementById("welcomeSubtitle");
  const credits = document.getElementById("welcomeCredits");
  const btn = document.getElementById("welcomeBtn");
  title.textContent = t("welcomeTitle");
  subtitle.textContent = t("welcomeSubtitle");
  document.getElementById("wCredit1").textContent = t("credit1");
  document.getElementById("wCredit2").textContent = t("credit2");
  document.getElementById("welcomeBtnText").textContent = t("startBtn");
  title.classList.add("show");
  subtitle.classList.add("show");
  credits.classList.add("show");
  btn.classList.add("show");
}

function startApp() {
  const welcome = document.getElementById("welcomeScreen");
  welcome.style.opacity = "0";
  setTimeout(() => {
    welcome.classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
    resetTest();
    document.getElementById("input").focus();
    updateLevelBadge();
  }, 700);
}

/* ─── 43. STAR RATING ─────────────────────────────── */
function initStarRating() {
  const stars = document.querySelectorAll(".star");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = parseInt(star.dataset.val);
      state.feedbackRating = val;
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        if (sv <= val) { s.textContent = "★"; s.classList.add("active"); }
        else { s.textContent = "☆"; s.classList.remove("active"); }
      });
    });
    star.addEventListener("mouseenter", () => {
      const val = parseInt(star.dataset.val);
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        s.textContent = sv <= val ? "★" : "☆";
      });
    });
  });
  const starRow = document.getElementById("starRow");
  if (starRow) {
    starRow.addEventListener("mouseleave", () => {
      stars.forEach(s => {
        const sv = parseInt(s.dataset.val);
        if (sv <= state.feedbackRating) { s.textContent = "★"; s.classList.add("active"); }
        else { s.textContent = "☆"; s.classList.remove("active"); }
      });
    });
  }
}

/* ─── 44. INIT ────────────────────────────────────── */
function init() {
  loadState();
  applyTheme();
  applyTranslations();
  updateSoundUI();
  updateLevelBadge();

  document.getElementById("textLangSelect").value = state.textLang || "en";
  document.getElementById("modeSelect").value = state.mode || "words";

  document.getElementById("uiLangEn").classList.toggle("active", state.uiLang === "en");
  document.getElementById("uiLangBn").classList.toggle("active", state.uiLang === "bn");
  document.getElementById("soundOn").classList.toggle("active", state.sound);
  document.getElementById("soundOff").classList.toggle("active", !state.sound);

  runWelcomeAnimation();
  switchSavedTab(state.customTab || "en");
  initStarRating();
  renderAboutTab("about");

  // ★ Apply visibility + lock of dropdowns based on current mode
  onModeChange();

  const input = document.getElementById("input");
  input.addEventListener("compositionstart", () => { isComposing = true; });
  input.addEventListener("compositionend", (e) => { isComposing = false; handleInput(e); });
  input.addEventListener("input", handleInput);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
    }
  });

  document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", (e) => { if (e.target === m) m.classList.remove("show"); });
  });

  const textDisplay = document.getElementById("text");
  if (textDisplay) {
    textDisplay.addEventListener("click", () => {
      if (!test.isFinished && !test.isPaused) document.getElementById("input").focus();
    });
  }

  const bestScoreEl = document.getElementById("bestScore");
  if (bestScoreEl) bestScoreEl.textContent = Math.max(state.bestScores.en, state.bestScores.bn) || 0;

  const savedInput = document.getElementById("savedAddInput");
  if (savedInput) {
    savedInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); addSavedSentence(); }
    });
  }

  window.addEventListener("resize", () => {
    if (document.getElementById("statsModal").classList.contains("show") && currentStatsTab === "graph") {
      drawLiveGraph(); drawDailyGraph();
    }
    if (!document.getElementById("levelUpPopup").classList.contains("hidden")) {
      const canvas = document.getElementById("confettiCanvas");
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
      }
    }
  });
}

/* ─── 45. RUN ─────────────────────────────────────── */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}