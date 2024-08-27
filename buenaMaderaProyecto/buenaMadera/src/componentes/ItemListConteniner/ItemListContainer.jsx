import React from 'react'

export const ItemListContainer = ({greeting }) => {
  return (
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
        {greeting }
        </button>
        <button type="button" class="list-group-item list-group-item-action">{greeting }</button>
        <button type="button" class="list-group-item list-group-item-action">{greeting }</button>
        <button type="button" class="list-group-item list-group-item-action">{greeting }</button>
        <button type="button" class="list-group-item list-group-item-action" disabled>{greeting }</button>
</div>
  )
}
export default ItemListContainer
