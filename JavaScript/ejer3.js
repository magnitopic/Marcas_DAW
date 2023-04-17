const likes = ["Juan", "María", "Pedro", "Pablo", "Laura"];

switch (likes.length) {
	case 0:
		console.log("Nadie ha dado like");
		break;
	case 1:
		console.log(likes[0] + " ha dado like");
		break;
	case 2:
		console.log(likes[0] + " y " + likes[1] + " han dado like");
		break;
	case 3:
		console.log(
			likes[0] + ", " + likes[1] + " y " + likes[2] + " han dado like"
		);
		break;
	default:
		console.log(
			likes[0] +	", " + likes[1] + " y " + (likes.length - 2) + " personas más han dado like"
		);
}
