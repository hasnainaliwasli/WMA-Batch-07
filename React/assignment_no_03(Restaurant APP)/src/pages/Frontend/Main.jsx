import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';

// Images are Imported
import pizzaImg from '../../Assets/piza.webp';
import burgerImg from '../../Assets/burger.jpg';
import pastaImg from '../../Assets/pasta.jpg';
import colaImg from '../../Assets/colaNext.jpg';
import browniImg from '../../Assets/browni.webp';
import samosaImg from '../../Assets/samosa.jpg';
import chipsImg from '../../Assets/chips.jpg';
import biryaniImg from '../../Assets/biryani.jpg';
import shawarmaImg from '../../Assets/shawarma.avif';



export default function Main() {

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCard = (card) => {
        const { title, price } = card;

        const priceNumber = parseFloat(price.replace('Rs:', '').trim())

        setCart(prev => {
            const existingItemIndex = prev.findIndex(item => item.title === title);

            if (existingItemIndex === -1) {
                console.log('Item is not in cart');
                return [...prev, { title, price, totalPrice: priceNumber, quantity: 1 }];
            } else {
                console.log('Item already in cart');
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].totalPrice += priceNumber;
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            }
        });
        window.toastify(`${title} is added to Cart`, 'success');
    }

    const cardData = [
        { imageSrc: pizzaImg, title: "Pizza", detail: 'Special Flavoured Pizza', price: 'Rs:1200', click: addToCard },
        { imageSrc: pastaImg, title: "Pasta", detail: 'A Special Pasta', price: 'Rs:800', click: addToCard },
        { imageSrc: burgerImg, title: "Burger", detail: '1 Zinger Burger', price: 'Rs:600', click: addToCard },
        { imageSrc: colaImg, title: "Next Cola", detail: '1 Litter Cola Next', price: 'Rs:120', click: addToCard },
        { imageSrc: browniImg, title: "Browni", detail: '1 Plate of Browni', price: 'Rs:500', click: addToCard },
        { imageSrc: chipsImg, title: "Chips", detail: '1 Plate of Chips', price: 'Rs:300', click: addToCard },
        { imageSrc: samosaImg, title: "Samosa", detail: '1 Plate of 2 Samosa', price: 'Rs:200', click: addToCard },
        { imageSrc: biryaniImg, title: "Biryani", detail: '1 Plate of Biryani', price: 'Rs:350', click: addToCard },
        { imageSrc: shawarmaImg, title: "Shawarma", detail: '1 Chicken Shawarma', price: 'Rs:200', click: addToCard },
    ];

    return (
        <div>
            <div className="container mt-4">
                <div className="row mt-2 mb-3">
                    {cardData.map((card, index) => (
                        <FoodCard
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            detail={card.detail}
                            price={card.price}
                            click={() => card.click(card)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}