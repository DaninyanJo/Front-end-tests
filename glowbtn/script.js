(()=>{
    let btn = document.getElementById("button");
    btn.addEventListener('click',()=>{
        let gate = document.getElementById("gate");
        gate.style.top = '0'
        setTimeout(()=>{
            gate.style.top = '-100vh'
        },1000)
    });
})();