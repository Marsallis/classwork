import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretLeft,
	faCaretRight,
	faCheckCircle,
	faCircle,
	faPlus
} from '@fortawesome/free-solid-svg-icons';
export default function App(props) {
	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 1, isSelected: false }
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItems, setTotalItems] = useState(1);

	const addItemButton = () => {
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

	const increaseButton = index => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const decreaseButton = index => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const purchasedItem = index => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItems = items.reduce((total, items) => {
			return total + items.quantity;
		}, 0);

		setTotalItems(totalItems);
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
					<FontAwesomeIcon icon={faPlus} onClick={() => addItemButton()} />
				</div>
				<div className="item-list">
					{items.map((item, index) => (
						<div className="item-container">
							<div className="item-name" onClick={() => purchasedItem(index)}>
								{items.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className="purchased">{item.itemName}</span>
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
										onClick={() => decreaseButton(index)}
									/>
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon
										icon={faCaretRight}
										onClick={() => increaseButton(index)}
									/>
									<span> {items.quantity} </span>
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="total">Total: {totalItems}</div>
			</div>
		</div>
	);
}
