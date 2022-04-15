import {useCallback, useRef, useState} from "react";
import {Table, Modal, Button, Input} from "antd";
import Link from "next/link";
import {EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {AddModal} from "../components/Modals/AddModal";
import {addUser, deleteUser, getUsers, updateUser} from "../services/user";
import {EditModal} from "../components/Modals/EditModal";


export async function getStaticProps() {
    return {
        props: {
            users: await getUsers()
        },
    }
}


const Users = ({users}) => {
    const {Search} = Input;
    const modalRef = useRef(null)
    const editModalRef = useRef(null)
    const [usersList, setUsersList] = useState(users)
    const [filter, setFilter] = useState('')
    const [userId, setUserId] = useState()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (record, user) => <Link href={`/users/${user.id}`}><a>{record}</a></Link>,
            responsive: ["xs", "sm", "md", "lg", "xl", "2xl"],

        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            responsive: [ "md", "lg", "xl", "2xl"],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            responsive: [ "sm","md", "lg", "xl", "2xl"]
        },
        {
            title: 'Address',
            dataIndex: 'website',
            key: 'address',
            responsive: ["lg", "xl", "2xl"]
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            responsive: [  "lg", "xl", "2xl"]
        },
        {
            title: "Details",
            render: ((record, user) => {
                return (
                    <div className="flex">
                        <EditOutlined onClick={() => openEditModal(record.id)}/>
                        <DeleteOutlined onClick={() => showPromiseConfirm(record.id)}
                                        style={{color: "red", marginLeft: "20px"}}/>
                    </div>
                )
            }),
            key: "details",
            responsive: ["xs", "sm", "md", "lg", "xl", "2xl"]
        }

    ];


    const {confirm} = Modal;


    function showPromiseConfirm(userId) {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleOutlined style={{color: 'red'}}/>,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            okType: 'danger',
            cancelType: 'danger',
            onOk() {
                return new Promise((resolve, reject) => {
                    deleteUser(userId).then(() => setUsersList(usersList.filter((user) => user.id !== userId)))
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
            },
        });
    }


    function editMyUser(userId, userData) {
        updateUser(userId, userData).then((userData) => {
            setUsersList((user) =>
                user.map((item) => (item.id === userId ? {...item, ...userData} : item)),
            );
        });
    }


    const createMyUser = useCallback((user) => {
        addUser(user).then(() => setUsersList([user, ...usersList]))
    }, [usersList]);


    const filterItems = (filter) => {
        if (!filter) {
            return usersList
        }

        return usersList.filter((i) => {
            return (
                i.name.toLowerCase().includes(filter.toLowerCase()) ||
                i.username.toLowerCase().includes(filter.toLowerCase()) ||
                i.email.toLowerCase().includes(filter.toLowerCase()) ||
                i.website.toLowerCase().includes(filter.toLowerCase()) ||
                i.phone.includes(filter)
            )
        })
    }


    const items = filterItems(filter)

    const openAddModal = () => {
        modalRef.current.open()
    }

    const openEditModal = (userId) => {
        setUserId(userId)
        editModalRef.current.open()
    }


    const onSearch = useCallback((e) => {
        setFilter(e.target.value)
    }, [filter]);

    return (
        <div className="min-w-max">
            <Search placeholder="input search text" onChange={onSearch} allowClear enterButton className="mt-10"/>
            <div className="mt-10 flex items-center justify-end">
                <Button type="primary" icon={<PlusOutlined/>} onClick={openAddModal}>
                    Add User
                </Button>
                <AddModal ref={modalRef} createMyUser={createMyUser}/>
                <EditModal ref={editModalRef} editMyUser={editMyUser} userId={userId}/>
            </div>
            <Table className="w-full h-full" size="medium" dataSource={items} columns={columns}
                   rowKey={usersList => usersList.id}
                   pagination={{position: ['none', 'none']}}
            />
        </div>
    )
}

export default Users;

