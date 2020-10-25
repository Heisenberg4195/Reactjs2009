//bai1
const getNumber = n => {
    n == Number
    for (i = 1; i <= 10; i++) {
        console.log('${n} * ${i} =', i)
    }
}

//bai2
const takeEvenNumber = n => {
    if (n >= 1 && n <= 30) {
        for(let i =2; i <= n; i += 2)
        console.log(i)
    }
}

//bai3
const calcSum = number => {
    let sum = 0
    if (n >= 1 && n <= 30) {
        for(let i = 1; i <= n; i++) {
            sum += i
        }
        console.log(sum)
    }
}

//bai4
const takeFactorial = n => {
  n == Number
  let fact = 1
  if (n >= 1 && n <=30) {
    for(let i = 1; i <= n; i++) {
      fact *= i
    }
    console.log(fact)
  }
}

//bai5
let arr = [1, 2, 3, 4, 5, 6]
let count = 0
arr.forEach((sum, i) => {
  if (i % 2 === 0) {
    count++
  }
})
console.log(count)

//bai6
const arr = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
const unique = [ ...new Set(arr)]
console.log(unique)

//bai7
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]
const merged = []
for (let i = 0; i < studentNames.length; i++) {
  merged.push ({
    ...studentNames[i],
    ...studentScores[i]
  })
}
console.log(merged)

//bai8 not yet