import React from 'react'
import { IState as IProps} from '../App'


/*  OR /Another way to define props
type/interface IProps = {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
  }
*/

// without React.RF
type peopleProps = IProps
const List = ({ people }: peopleProps) => {

    const renderList = (): JSX.Element[] => {
         return people.map((person) => {
            return (
                <li className='List'>
                <div className='List-header'>
                    <img className='List-img' src={person.url} alt=""  />
                    <h2>{ person.name }</h2>
                </div>
                <p>{person.age}</p>
                <p className='List-note'>{person.note}</p>
            </li>
            )
        })
    }

  return (
    <ul>
        {renderList()}
    </ul>
  )
}

export default List