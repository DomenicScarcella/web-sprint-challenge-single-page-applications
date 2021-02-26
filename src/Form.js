import React from 'react'

export default function Form(props) {
    const {values, submit, change, disabled, errors} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit(values)
    }
    console.log(values)
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Order Your Pizza</h2>

                <div className='form-inputs'>

                    <div>
                    <label>Name&nbsp;
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        /><br /><br />
                    </label>
                    </div>

                    <div>
                    <label>Pizza SIZE:&nbsp;
                        <select name='size' value={values.size} onChange={onChange}>
                            <option value='grande'>Grande</option>
                            <option value='venti'>Venti</option>
                            <option value='tall'>Tall</option>
                        </select><br /><br />
                    </label>
                    </div>

                    <div>
                    <label>Pizza TOPPINGS:<br />
                        Extra Cheese
                        <input 
                            checked={values.terms}
                            onChange={onChange}
                            name='cheese'
                            type='checkbox'
                        /><br />
                        Pepperoni
                        <input 
                            checked={values.terms}
                            onChange={onChange}
                            name='pepperoni'
                            type='checkbox'
                        /><br />
                        Onions
                        <input 
                            checked={values.terms}
                            onChange={onChange}
                            name='onions'
                            type='checkbox'
                        /><br />
                        Mushrooms
                        <input 
                            checked={values.terms}
                            onChange={onChange}
                            name='mushrooms'
                            type='checkbox'
                        /><br /><br />
                    </label>
                    </div>

                    <div>
                    <label>{`Special instructions? (optional)`}&nbsp;
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='instr'
                            type='text'
                        /><br /><br /><br />
                    </label>
                    </div>

                    <button id='submitButton' disabled={disabled}>Submit</button>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.confirm}</div>
                    </div>
                </div>
            </div>
        </form>
    )
}