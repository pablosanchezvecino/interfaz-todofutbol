const colClass = 'col'
    const cardStyle = 'width: max-content; text-align: center;'
    const cardClass = 'card mb-3'

        const ul1Class = 'list-group list-group-horizontal'
            const li1Class = 'list-group-item border-0'
                const ul2Class = 'list-group'
                    const li2Class = 'list-group'
        const footerClass = 'card-footer'

const row = document.getElementById('row')

            
            const col = document.createElement('h1')
            col.className = colClass
            col.textContent='wwwwwwwwwww'
            row.appendChild(col)

            const card = document.createElement('div')
            card.className = cardClass
            card.style = cardStyle

            row.appendChild(col)



































          



            const row = document.getElementById('row')

            
            const col = document.createElement('div')
            col.className = 'col'
            row.appendChild(col)

            const card = document.createElement('div')
            card.className = 'card mb-3'
            card.style = 'width: max-content; text-align: center;'

            col.appendChild(card)

            const ul1 = document.createElement('ul')
            ul1.className = 'list-group list-group-horizontal'
            card.appendChild(ul1)

            const li1 = document.createElement('li')
            li1.className = 'list-group-item border-0'
            ul1.appendChild(li1)

            const ul2 = document.createElement('ul')
            ul2.className = 'list-group'
            li1.appendChild(ul2)

            const li2 = document.createElement('li')
            li2.className = 'list-group-item border-0'
            ul2.appendChild(li2)

            const image1 = document.createElement('img')
            image1.src = 'res/escudos/la-liga/barcelona.png'
            image1.height = '80'
            li2.appendChild(image1)

            const li3 = document.createElement('li')
            li3.className = 'list-group-item border-0'
            li3.textContent = 'FC Barcelona'
            ul2.appendChild(li3)



            const li4 = document.createElement('li')
            li4.className = 'list-group-item border-0'
            ul1.appendChild(li4)

            const br1 = document.createElement('br')
            li4.appendChild(br1)
            const br2 = document.createElement('br')
            li4.appendChild(br2)

            const h2Resultado = document.createElement('h2')
            h2Resultado.textContent = '99 - 0'
            li4.appendChild(h2Resultado)















            const li5 = document.createElement('li')
            li5.className = 'list-group-item border-0'
            ul1.appendChild(li5)

            const ul3 = document.createElement('ul')
            ul3.className = 'list-group'
            li5.appendChild(ul3)

            const li6 = document.createElement('li')
            li6.className = 'list-group-item border-0'
            ul3.appendChild(li2)

            const image2 = document.createElement('img')
            image2.src = 'res/escudos/la-liga/madrid.png'
            image2.height = '80'
            li6.appendChild(image2)

            const li7 = document.createElement('li')
            li7.className = 'list-group-item border-0'
            li7.textContent = 'Real Madrid'
            ul3.appendChild(li7)







            const footer = document.createElement('div')
            footer.className = 'card-footer'
            card.appendChild(footer)

            const fecha = document.createElement('h5')
            fecha.textContent = '19-05-2022'
            footer.appendChild(fecha)


            
            

            
            
            

            
