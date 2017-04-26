export function getBattleSchema(id, name, users){
	return {
		currentRound: 0,
		id,
		name,
		rounds: [
			{
				completed: false,
				text: "Take away the stools, the sideboards, and the plates. You, good friend, save me a piece of marzipan, and if you love me, have the porter let in Susan Grindstone and Nell. Antony and Potpan!"
			},
			{
				completed: false,
				text: "Cervantes respectfully dedicates his novel to the Duke of Bejar and asks him to protect the novel from ignorant and unjust criticism."
			}
		],
		users: users.reduce((acc, userId) => {
			return acc = {
				...acc,
				[userId]: {
					connected: false,
					id: userId,
					wordIndex: 0
				}
			};
		}, {})
	}
}