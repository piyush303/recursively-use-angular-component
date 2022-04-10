import Comment from "../models/Comment";

export const CommentSchema: Comment[] = [
	{
		text: "comment 1",
		children: [
			{
				text: "comment 1.1",
				children: [
					{
						text: "comment 1.1.1"
					}
				]
			},
			{
				text: "comment 1.2",
				children: [
					{
						text: "comment 1.2.1"
					},
					{
						text: "comment 1.2.2"
					}
				]
			}
		]
	},
	{
		text: "comment 2",
		children: []
	},
	{
		text: "comment 3",
		children: []
	}
]