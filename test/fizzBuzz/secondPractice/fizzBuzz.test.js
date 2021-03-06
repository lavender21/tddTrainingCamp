
import {NumberGame} from "../../../src/fizzBuzz/secondPractice/NumberGame";
import {FizzBuzz} from "../../../src/fizzBuzz/secondPractice/FizzBuzz";

describe('test fizzBuzz game',() => {
    it('should return 1 when input 1',() => {
        expectNumber(1, "1");
    });
    it('should return Fizz when input 3',() => {
        expectNumber(3, "Fizz");
    });
    it('should return Buzz when input 5',() => {
        expectNumber(5, "Buzz");
    });
    it('should return FizzBuzz when input 15',() => {
        expectNumber(15, "FizzBuzz");
    });
});

describe('test number game',() => {
    it('should return 1-100 with correct Fizz and Buzz and FizzBuzz',() => {
        const numberGame = new NumberGame(100);
        expect(numberGame.print()).toBe(`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz`)
    });
});

function expectNumber(value, expected) {
    const fizzBuzz = new FizzBuzz(value);
    expect(fizzBuzz.say()).toBe(expected);
}
