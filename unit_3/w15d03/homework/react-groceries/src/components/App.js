import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretRight,
	faCaretLeft,
	faCircle,
	faCheckCircle,
	faPlus
} from '@fortawesome/free-solid-svg-icons';
export default function App(props) {
	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 1, isSelected: false }
	]);

	const [inputValue, setInputValue] = useState('');
	const [itemTotal, setItemTotal] = useState(1);

	const addToListButton = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};

	const increaseQuantity = index => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const decreaseQuantity = index => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const puchasedItem = index => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const itemTotal = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setItemTotal(itemTotal);
	};

	return (
		<div className="app-background">
			<div className="main-container">
				<h2>My Grocery List</h2>
				<div className="add-item-box">
					<input
						value={inputValue}
						onChange={event => setInputValue(event.target.value)}
						className="add-item-input"
						placeholder="Add an item..."
					/>
					<FontAwesomeIcon icon={faPlus} onClick={() => addToListButton()} />
				</div>
				<div className="item-list">
					{items.map((item, index) => (
						<div className="item-container">
							<div className="item-name" onClick={() => puchasedItem(index)}>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className="completed">{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className="quantity">
								<button>
									<FontAwesomeIcon
										icon={faCaretLeft}
										onClick={() => decreaseQuantity(index)}
									/>
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon
										icon={faCaretRight}
										onClick={() => increaseQuantity(index)}
									/>
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="total">Total: {itemTotal}</div>
			</div>
		</div>
	);
}
