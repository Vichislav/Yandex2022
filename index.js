
let n = Number(prompt())
let countNumber = 0

const mainCount = (n) => {

    for (let i = 2; i < n; i++) { // перебираем все числа до n
        let iterCount = (i-1) //счетчик итераций
        for (let j = 2; j <= i; j++) { // проверить, делится ли число..
            if (i % j == 0) { //если оно делится само на себя то мы не убавляем счетчик
                    if(iterCount === 1) { //деление без остатка должно быть одно
                        countNumber++
                    }
            }
            else {
                iterCount-- //следим за убыванием счетчика итераций
            }
        }

    }
    console.log('количество простых чисел: ' + countNumber)
}
mainCount(n);