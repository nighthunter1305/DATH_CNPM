import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Payment.scss';
import { FaLocationDot } from "react-icons/fa6";

const Payment = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewAddressFormOpen, setIsNewAddressFormOpen] = useState(false);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newAddressDetail, setNewAddressDetail] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenNewAddressForm = () => {
        setIsNewAddressFormOpen(true);
    };

    const handleSaveAddress = () => {
        const fullAddress = {
            name: newName,
            phone: newPhone,
            address: newAddress,
            addressDetail: newAddressDetail
        };
        setAddresses([...addresses, fullAddress]);
        setSelectedAddress(fullAddress);
        setNewName("");
        setNewPhone("");
        setNewAddress("");
        setNewAddressDetail("");
        setIsNewAddressFormOpen(false);
    };

    return (
        <>
            <h2>Thanh toán</h2>
            <div className="payment-pro">
                <div className="cus-in4">
                    <label><FaLocationDot /> Địa chỉ nhận hàng</label>
                    <div className="cus-in4-detail">
                        <span>Nguyen Trong Truong 0817727460</span>
                        <span>Địa chỉ: 123/4/5 Đường 1, Phường 2, Quận 3, TP.HCM</span>
                        <button onClick={handleOpenModal}>Thay đổi</button>
                    </div>

                </div>

                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Địa chỉ của tôi</h3>
                            <div className="address-list">
                                {addresses.map((address, index) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            id={`address-${index}`}
                                            name="address"
                                            value={address}
                                            checked={selectedAddress === address}
                                            onChange={() => setSelectedAddress(address)}
                                        />
                                        <div>
                                            <div>{address.name} | {address.phone}</div>
                                            <div>{address.addressDetail}</div>
                                            <div>{address.address}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="modal-button">
                            <button onClick={handleOpenNewAddressForm}>Thêm địa chỉ mới</button>
                                <button onClick={handleCloseModal}>Hủy</button>
                                <button onClick={handleSaveAddress}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                )}

                {isNewAddressFormOpen && (
                    <div className="new-address-form">
                        <h3>Thêm địa chỉ mới</h3>
                        <div className="name-phone">
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Nhập họ tên"
                            />
                            <input
                                type="text"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                                placeholder="Nhập số điện thoại"
                            />
                        </div>

                        <input
                            type="text"
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            placeholder="Nhập địa chỉ mới"
                        />
                        <input
                            type="text"
                            value={newAddressDetail}
                            onChange={(e) => setNewAddressDetail(e.target.value)}
                            placeholder="Nhập địa chỉ cụ thể"
                        />
                        <div className="modal-button">
                            <button onClick={handleOpenNewAddressForm}>Thêm địa chỉ mới</button>
                            <button onClick={handleSaveAddress}>Lưu</button>
                            <button onClick={() => setIsNewAddressFormOpen(false)}>Hủy</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Payment;