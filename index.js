
let n = Number(prompt())
let countNumber = 0

const mainCount = (n) => {


    for (let i = 2; i < n; i++) { // перебираем все числа до n
        let iterCount = (i-1)
        for (let j = 2; j <= i; j++) { // проверить, делится ли число..

            if (i % j == 0) {
                console.log(i, j + 'делится без остатка')

                    if(iterCount === 1) {
                        countNumber++
                    }
            }
            else {
                iterCount--
                console.log(i, j + 'ЕСТЬ ОСТАТОК')
            }
        }

    }
    console.log('колличество простых чисел: ' + countNumber)
}

mainCount(n);