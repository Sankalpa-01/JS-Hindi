const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
}
for (const key in myObject) {
    console.log(`${key} shorcut is for ${myObject[key]}`);
}


const programming = ["js", "cpp", "c", "java"]
for (const key in programming) {
    console.log(programming[key]);   
}

