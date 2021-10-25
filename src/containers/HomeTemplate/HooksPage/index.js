import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
} from "react";
import Child from "./child";
import CustomHooks from "./custom-hooks";
import DemoUseReducer from "./demoUseReducer";

export default function HooksPage() {
    // [value, function] = useState(initial_value)
    const [number, setNumber] = useState(0);

    // useRef() giúp chúng ta ko bị ảnh hưởng khi render lại
    // vì khi render lại chúng ta sẽ phải khởi tạo lại biến preNumber
    const preNumber = useRef(0);

    // const [state, setState] = useState({
    //     isStatus: false,
    //     userName: "Cybersoft",
    //     age: 18,
    // });

    useEffect(() => {
        console.log(
            "Tương đương với componentDidMount bên class, nếu tham số thứ 2 là [] rỗng"
        );
    }, []);

    // useEffect(() => {
    //     console.log(
    //         "Tương đương với componentDidUpdate bên class, nếu tham số thứ 2 là [] khác rỗng"
    //     );
    // }, [number]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log("Hello interval");
    //     }, 1000);

    //     return () => {
    //         // Tương đương componentWillUnmount bên class
    //         clearInterval(interval);
    //     };
    // }, []);

    // Khi truyền vào cho component 1 cái props
    // thì khi "state" thay đổi thì component đó sẽ bị render lại
    // ( mặc dù đã sử dụng "meno" cho component đó)
    // nếu không muốn component đó render lại thì
    // phải sử dụng => useCallback() để giải quyết vấn đề đó
    const showNumber = () => {
        console.log("Show Number");
    };

    // useCallback(function, [])
    const showNumberCallback = useCallback(showNumber, []);

    const numberUp = () => {
        let i = 0;
        while (i < 1000) i++;
        console.log(i);
        return i;
    };

    // useMemo(() => function, []) => Trả về 1 giá trị
    // kiểm tra xem giá trị đó có thay đổi hay không ?
    // nếu không thay đổi thì ko render lại
    const numberUpMemo = useMemo(() => numberUp(), []);

    return (
        <div>
            <h3>Hooks Page</h3>
            <h1>PreNumber: {preNumber.current}</h1>
            <h1>Number: {number}</h1>
            <button
                className="btn btn-success"
                onClick={() => {
                    setNumber(number + 1);
                    preNumber.current = number;
                }}
            >
                Increament
            </button>

            <hr />

            <h1>Number Up: {numberUpMemo}</h1>

            <hr />

            <Child showNumber={showNumberCallback} />

            <hr />

            <DemoUseReducer />

            <hr />

            <CustomHooks />
        </div>
    );
}
