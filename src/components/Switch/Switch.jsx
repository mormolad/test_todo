import './Switch.css';

function Switch({ stateSwitch, setStateSwitch }) {
  const label = {
    left: { title: "Все", position: 'left' },
    center: { title: "Готовые", position: 'center' },
    right: { title: "Не готовые", position: 'right' }
  }
  const handleClickSwitch = (state) => {
    setStateSwitch(state)
  }


  return (<div className='switch'>
    <div className={`switch-checkbox ${stateSwitch === 'left' && 'switch__checkbox_active'}`} onClick={() => handleClickSwitch(label.left.position)}>
      {label.left.title}
    </div>
    <div className={`switch-checkbox ${stateSwitch === 'center' && 'switch__checkbox_active'}`} onClick={() => handleClickSwitch(label.center.position)}>
      {label.center.title}
    </div>
    <div className={`switch-checkbox ${stateSwitch === 'right' && 'switch__checkbox_active'}`} onClick={() => handleClickSwitch(label.right.position)}>
      {label.right.title}
    </div>
  </div>
  );
}


export default Switch;
