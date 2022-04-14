import {Descriptions} from "antd";


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {
            user
        },
    }
}


const User = ({user}) => {
    return (
        <div>
            <Descriptions title="User Info">
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Address">{user.website}</Descriptions.Item>
                <Descriptions.Item label="phone">{user.phone}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default User;