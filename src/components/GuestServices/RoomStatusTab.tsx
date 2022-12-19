import React, { useEffect, useState } from "react";
import {
    Col,
    Nav,
    Row,
    CloseButton,
    Button,
    Dropdown,
    DropdownButton,
    InputGroup,
    Form,
} from "react-bootstrap";
// import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { AppDispatch } from "../../Redux/Store";
import {
    Checkbox,
    CircularProgress,
    IconButton,
    Typography,
} from "@mui/material";
import MuiButton from "@mui/material/Button";
import MuiButtonGroup from "@mui/material/ButtonGroup";
import { Currency } from "../Types/Types";
import { useDispatch } from "react-redux";
import TaskModal from "../Modal";
import { useRoomTypes, getRoomType } from "../Setup/RateSetup/RateSetupSlice";
// import { getRoomType } from "../Setup/PropertySpace/propertySpaceSlice";

const buttons = [
    { name: "Dirty", class: "clr-red" },
    { name: "Inspection", class: "clr-orange" },
    { name: "Clean", class: "clr-green" },
    { name: "Out Of Order", class: "clr-gray" },
    { name: "All", class: "clr-blue" },
];
const arr = ["clean", "dirty", "inspection"];
const AccountType: Currency[] = [
    { value: "Guest Profile", label: "Guest Profile" },
];

function RoomStatusTab() {
    const [btn, setBtn] = useState<number>(0);
    const [select, setSelect] = useState<boolean>(false);
    const [roomType, setRoomType] = useState<any>([]);
    const [dropclose, setdropclose] = useState(true);
    const [loading, setIsLoading] = useState(false)
    const [isSetting, setIsSetting] = useState<any>([]);
    const [show, setShow] = useState<boolean>(false);
    const [data, setdata] = useState<any>(null);
    const dispatch = useDispatch<AppDispatch>();
    const { roomTypes } = useRoomTypes();

    const getRoomTypes = async () => {
        await dispatch(getRoomType()).unwrap();
    };

    useEffect(() => {
        getRoomTypes();
    }, []);

    const handleModal = () => setShow((p) => !p);

    const handle = (v, i, idx) => {
        const other = roomType.filter((_, index) => index !== idx)
        const target = roomType.find((_, index) => index == idx)
        other[idx] = { ...target, v }
        setRoomType([...other]);
        setdropclose((p) => !p);
        setIsSetting(idx);
    };


    return (
        <>
            <div className="room_status_tab">
                <Row className="d-flex">
                    <Col
                        md="5"
                        xs="12"
                        className="d-flex align-items-center"
                        lg="5"
                        xl="6"
                        xxl="6"
                    >
                        <Typography id="track-inverted-range-slider" variant="h5">
                            Room Status for Today
                        </Typography>
                    </Col>
                    <Col md="7" xs="12" lg="7" xl="6" xxl="6">
                        <MuiButtonGroup
                            size="large"
                            className="btn-group-container d-flex clr-black"
                            aria-label="large button group"
                        >
                            {buttons.map((v, i) => (
                                <>
                                    <MuiButton
                                        size="large"
                                        type="button"
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        className={`upper-btn d-flex align-items-center justify-content-center flex-column`}
                                        onClick={() => setBtn(i)}
                                        key={v.name}
                                    >
                                        <span className={`active ${i === btn && `_${i}`}`} />
                                        <Typography className={v.class} variant="h5">
                                            {i + 1}
                                        </Typography>
                                        <p
                                            className={`text-nowrap m-0 p-0 ${i === btn && v.class}`}
                                        >
                                            {" "}
                                            {v.name}
                                        </p>
                                    </MuiButton>
                                </>
                            ))}
                        </MuiButtonGroup>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-baseline">
                    <Col md="5" sm="5" xs="12" lg="5" xl="5" xxl="5">
                        <InputGroup className="mb-3">
                            <Form.Control
                                onChange={() => ""}
                                value=""
                                placeholder="Search Room, Zone, Occupancy and more"
                            />
                            <InputGroup.Text className="bg-green" id="basic-addon2">
                                <i style={{ color: "white" }} className="icon fe fe-search"></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col xl="1" xxl="1" />
                    <Col
                        md="7"
                        xs="12"
                        lg="7"
                        sm="7"
                        xl="6"
                        xxl="6"
                        className="d-flex align-items-center"
                    >
                        <div className="check_select m-1 text-nowrap">
                            <span>{select ? "Deselect All" : "Select All"}</span>
                            <Form.Check
                                checked={select}
                                className="ml-20" style={{ marginLeft: "20px" }}
                                onChange={(e) => setSelect(e.target.checked)}
                                type={"checkbox"}
                            />
                        </div>
                        <DropdownButton
                            align="end"
                            className="m-1 filter-drop"
                            title="Update Status"
                            disabled
                            color="white"
                        >
                            <Dropdown.Item eventKey="1">Dirty</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Clean</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Another</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            align="end"
                            className="m-1 filter-drop"
                            title="Sort by Room"
                        >
                            <Dropdown.Item eventKey="1">Room #</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Zone</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Arrival Due</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            align="end"
                            className="m-1 filter-drop"
                            color="white"
                            title="Reports"
                        >
                            <Dropdown.Item eventKey="3">HouseKeeping Report</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="bg-light-gray card--row h-200 h-auto mt-3 p-2">
                    {roomTypes?.docs?.length ? (
                        roomTypes.docs.map((v, idx) => {
                            return (
                                <Col
                                    key={idx}
                                    className={`${idx % 2 == 0 ? "bg-green" : "bg-red"
                                        } h-200 card-col`}
                                    md="3"
                                    lg="3"
                                    xl="3"
                                    xxl="3"
                                    sm="4"
                                    xs="12"
                                >
                                    <div className="image d-flex flex-column">
                                        <Typography className="" variant="h4">
                                            {idx + 1}
                                        </Typography>
                                        <p className="">{v.name}</p>
                                        <div className="overlay">
                                            <Checkbox
                                                size="medium"
                                                className="checkbx"
                                                disableRipple
                                                disableFocusRipple
                                                disableTouchRipple
                                                icon={<CircleUnchecked className="clr-white" />}
                                                checkedIcon={
                                                    <CircleCheckedFilled className="clr-white" />
                                                }
                                            />
                                            {loading ? (
                                                <CircularProgress />
                                            ) : (
                                                <>
                                                    {/* {(dropclose || isSetting !== idx
                                                        ? arr.filter((v) => v == buttons)
                                                        : arr
                                                    ).map((v, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => handle(v, i, idx)}
                                                            className="btn"
                                                        >
                                                            {" "}
                                                            {!(dropclose || isSetting !== idx) ? v : button}
                                                        </button>
                                                    ))} */}
                                                    {(dropclose || isSetting !== idx) && (
                                                        <button
                                                            onClick={() => {
                                                                handleModal();
                                                                setdata(v);
                                                            }}
                                                            className="btn"
                                                        >
                                                            0 TASK(s)
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <p className="mt-auto">Vanact</p>
                                    </div>
                                </Col>
                            );
                        })
                    ) : (
                        <Typography variant="h6" className="m-auto text-center clr-gray">
                            No results found for the selected criteria and property
                        </Typography>
                    )}
                </Row>
            </div>
            {show && <TaskModal data={data} handleModal={handleModal} />}
        </>
    );
}

export default RoomStatusTab;
