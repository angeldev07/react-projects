import { useState } from 'react'

export const useRate = ({ score }) => {
	const [rate, setRate] = useState(score)
	const [voted, setVoted] = useState(false)

	const handleIncrementRate = () => {
		if (!voted) {
			setRate(rate + 1)
			setVoted(true)
		}
	}

	const handleDecrementRate = () => {
		if (voted) {
			setRate(rate - 1)
			setVoted(false)
		}
	}

	return {
		rate,
		increment: handleIncrementRate,
		decrement: handleDecrementRate,
	}
}
