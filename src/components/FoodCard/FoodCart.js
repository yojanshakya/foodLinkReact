import React from "react";

export function FoodCart({
	item,
	onAddToCart,
}) {

	const [quantity, setQuantity] = React.useState(0)
	const onIncrease = ()=>{
		setQuantity(quantity+1);
	}

	const onDecrease = ()=>{
		if(quantity == 0){
			return
		}
		setQuantity(quantity-1)
	}

	return <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
		<div class="card d-flex flex-fill">
			<div class="card-body">
				<div class="row">
					<div class="col-7">
						<h2 class="lead"><b>{item.foodName}</b></h2>
						<p class="text-muted text-sm"><b>Description: </b> {item.description} </p>
					</div>
					<div class="col-5 text-center">
						<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"} alt="user-avatar" class="img-circle img-fluid" />                        </div>
				</div>
			</div>
			<div class="card-footer bg-white d-flex">
				<div class="input-group input-group-sm ml-auto" style={{ "max-width": "120px" }}>
					<span class="input-group-btn">
						<button type="button" onClick={onDecrease} class="quantity-left-minus btn btn-sm btn-number btn-light" data-type="minus" data-field="">
							<span class="">-</span>
						</button>
					</span>
					<input readOnly type="text" id="quantity" name="quantity" class="form-control input-number" style={{ "max-width": "50px",backgroundColor: "white" }} value={quantity} min="1" max="100" />
					<span class="input-group-btn">
						<button onClick={() => onIncrease()} type="button" class="quantity-right-plus btn btn-sm btn-light btn-number" data-type="plus" data-field="">
							<span class="">+</span>
						</button>
					</span>
				</div>
				<button onClick={() => {
					onAddToCart(item, quantity);
				}} class="btn btn-sm btn-light">
					Add to My Orders
				</button>
			</div>
		</div>
	</div>
}