export enum PersonGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface Props {
  name: string,
  messageCount: number,
  isOnline: boolean,
  gender?: string
}

const Greet = (props: Props) => {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  )
}
export default Greet;