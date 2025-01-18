(() => {

    const observer = new IntersectionObserver((elements, observer) => {
        console.log(elements)
        elements.forEach(element => {
            console.log(element)
            if(element.isIntersecting){
                if(element.target.getAttribute('data-id') === 'parallax')
                    element.target.style.backgroundImage = `url(${element.target.getAttribute('data-img')})`
                observer.unobserve(element.target)
            }
        })
    }, {threshold: .05})


    document.querySelectorAll('.parallax').forEach(element => {
        observer.observe(element)
    })

})()