import { updateDollarAmount } from './api';
import Button from './Button';

function Edit(props) {

  const setDollarAmount = props.setDollarAmount;
  const dollarAmount = props.dollarAmount;

  function onClickDeposit10() {
    setDollarAmount(dollarAmount + 10);
    updateDollarAmount(10);
  }

  function onClickDeposit20() {
    setDollarAmount(dollarAmount + 20);
    updateDollarAmount(20);
  }

  function onClickWithdraw10() {
    setDollarAmount(dollarAmount - 10);
    updateDollarAmount(-10);
  }

  function onClickWithdraw20() {
    setDollarAmount(dollarAmount - 20);
    updateDollarAmount(-20);
  }

  return (
    <div>
      <div className='row'>
        <Button text='Deposit $10' onClick={onClickDeposit10} />
        <Button text='Deposit $20' onClick={onClickDeposit20} />
      </div>
      <div className='row'>
        <Button text='Withdraw $10' onClick={onClickWithdraw10} />
        <Button text='Withdraw $20' onClick={onClickWithdraw20} />
      </div>
    </div>
  );
}

export default Edit;