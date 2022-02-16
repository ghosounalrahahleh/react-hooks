import React, { useState , forwardRef, useImperativeHandle } from "react";


const Button = forwardRef( (props,ref) => {

  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, ()=>({
    alterToggle() {
            setToggle(!toggle);
          },
  }))
  return (
    <div>
      {/* <button onClick={() => setToggle(!toggle)} className="ui secondary button">button from child</button> */}
      <div>{toggle && <span>Toggle</span>}</div>
    </div>
  );
});

export default Button;


// const Button = forwardRef((props, ref) => {
//   const [toggle, setToggle] = useState(false);

//   useImperativeHandle(ref, () => ({
//     alterToggle() {
//       setToggle(!toggle);
//     },
//   }));

//   return (
//     <div>
//       <button>button from child</button>
//       <div>{toggle && <span>Toggle</span>}</div>
//     </div>
//   );
// });

// export default Button;