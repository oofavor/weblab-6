function pow(x, n) {
    if (n < 0 || n % 1 !== 0) {
        return "Эта функция поддерживает только натуральные значения n.";
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function minDigit(x) {
    if (x < 0) {
        return "Число должно быть неотрицательным.";
    }

    if (x === 0) {
        return 0;
    }

    let min = 9;

    while (x > 0) {
        const digit = x % 10;
        if (digit < min) {
            min = digit;
        }
        x = Math.floor(x / 10);
    }

    return min;
}

function pluralizeRecords(n) {
    if (n < 0) return "ne nado tak"
    const x = n
    n %= 10

    if (n === 1) {
        return `В результате выполнения запроса было найдено ${x} запись`;
    } else if (n > 1 && n < 5) {
        return `В результате выполнения запроса было найдено ${x} записи`;
    } else {
        return `В результате выполнения запроса было найдено ${x} записей`;
    }
}

function fib(n) {
    if (n < 0 || n > 1000) return "ne nado tak"
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const powXInput = document.getElementById("powx_input")
const powNInput = document.getElementById("pown_input")
const powButton = document.getElementById("pow_button")
const powBody = document.getElementById("pow")

const nodAInput = document.getElementById("noda_input")
const nodBInput = document.getElementById("nodb_input")
const nodButton = document.getElementById("nod_button")
const nodBody = document.getElementById("nod")

const minInput = document.getElementById("min_input")
const minButton = document.getElementById("min_button")
const minBody = document.getElementById("min")

const plurInput = document.getElementById("plur_input")
const plurButton = document.getElementById("plur_button")
const plurBody = document.getElementById("plur")

const fibInput = document.getElementById("fib_input")
const fibButton = document.getElementById("fib_button")
const fibBody = document.getElementById("fib")


powButton.addEventListener("click", () => {
    const inputX = powXInput.value
    if (inputX.trim() === "") {
        return
    }
    const inputN = powNInput.value
    if (inputN.trim() === "") {
        return
    }
    const answer = pow(+inputX, +inputN)
    powBody.innerText = answer
})

nodButton.addEventListener("click", () => {
    const inputA = nodAInput.value
    if (inputA.trim() === "") {
        return
    }
    const inputB = nodBInput.value
    if (inputB.trim() === "") {
        return
    }
    const answer = gcd(+inputA, +inputB)
    nodBody.innerText = answer
})

minButton.addEventListener("click", () => {
    const input = minInput.value
    if (input.trim() === "") {
        return
    }
    const answer = minDigit(+input)
    minBody.innerText = answer
})

plurButton.addEventListener("click", () => {
    const input = plurInput.value
    if (input.trim() === "") {
        return
    }
    const answer = pluralizeRecords(+input)
    plurBody.innerText = answer
})

fibButton.addEventListener("click", () => {
    const input = fibInput.value
    if (input.trim() === "") {
        return
    }
    const answer = fib(+input)
    fibBody.innerText = answer
})
