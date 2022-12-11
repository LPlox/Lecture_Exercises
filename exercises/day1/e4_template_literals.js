/**
 * Template literals
 * REWRITE THE STRING TO A TEMPLATE STRING
 * 
 * An example of template literal
 * `Hi my name is ${name}`
 *
 * TASK
 * Take the string below and rewrite it using template literals.
 */

let paymentOptions = ["Credit Cards", "PayPal"];
let currency = "USD";
let privateVAT = "VAT may apply";

console.log(
	"All prices in " +
		currency +
		". Payments accepted with " +
		paymentOptions[0] +
		" and " +
		paymentOptions[1] +
		". " +
		privateVAT +
		"."
);
