export default interface Comment {
	text: string;
	children?: Array<Comment>
}