import React from "react"
import Card from "./Card"

export default ({
  column,
  onClick,
  materias,
  colors
}) => (
  <tr className="column">
    {column.cards.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        card={card}
        cardIndex={cardIndex}
        materias={materias}
        colors={colors}
        onClick={() => onClick(cardIndex)}
      />
    ))}
  </tr>
)