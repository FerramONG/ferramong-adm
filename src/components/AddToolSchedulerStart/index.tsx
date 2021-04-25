import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DialogContentText } from '@material-ui/core';
import { Container } from "./styles"
import { useLogin } from '../../context/GlobalState'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// interface PropTypes {
//   userId: string
// }

export default function VisitSchedulerModal(props) {
  const { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool } = useLogin();
  // const { userId } = props;
  const [openScheduleVisit, setOpenScheduleVisit] = React.useState(false);
  const [openCancelVisit, setOpenCancelVisit] = React.useState(false);
  const [dateChecked, setDateChecked] = React.useState(false);
  //const [hasVisit, setHasVisit] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate>(new Date());

  let fullDate, month, day, year;
  const [gambiarra, setGambiarra] = React.useState(0);
  useEffect(() => {
    if (gambiarra == 2) {
      console.log('ALERTA!ENTROU NO IF DO GAMBIARRA==2')
      // setStartDateTool(fullDate)
      console.log(startDateTool)
    }
    console.log('DEPOIS DO IF,VAMOS VER O VALOR DE STARTDATE')
    console.log(startDateTool)
    setGambiarra(gambiarra => gambiarra + 1);
    //console.log(gambiarra)
  }, [startDateTool]);

  const handleClickOpen = () => {

    if (!dateChecked) {
      setOpenScheduleVisit(true);
    }
    else {
      setOpenCancelVisit(true);
    }
  };

  const handleCloseVisit = () => {
    setOpenScheduleVisit(false);
  };

  const handleCloseCancelVisit = () => {
    setOpenCancelVisit(false);
  };

  const handleConfirmVisit = () => {
    //setHasVisit(true);
    console.log('SELECTED DATE')
    month = '' + (selectedDate.getMonth() + 1)
    day = '' + selectedDate.getDate()
    year = selectedDate.getFullYear();
    if(month<10){
      fullDate = year + '-0' + month + '-' + day;
    }else{
      fullDate = year + '-' + month + '-' + day;
    }
    
    setStartDateTool(fullDate);
    setOpenScheduleVisit(false);
    setDateChecked(true);
    console.log(startDateTool);
  };

  const handleDeleteVisit = () => {
    //setHasVisit(false);
    //console.log(hasVisit)
    setDateChecked(false);
    setOpenCancelVisit(false)
    setStartDateTool(undefined)
  }

  return (
    <Container>
      <Button className="button" variant="contained" color="primary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={openScheduleVisit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseVisit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Quer marcar a disponibilidade?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Marque aqui uma data
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              value={selectedDate}
              onChange={(date: MaterialUiPickersDate) => setSelectedDate(date)}
              disablePast
              ampm={false}
              onError={console.log}
              format="dd/MM/yyyy HH:mm"
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseVisit} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmVisit} color="primary">
            Marcar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openCancelVisit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseCancelVisit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Sua data já foi marcada"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Você já tem uma data marcada para {selectedDate?.toLocaleString()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancelVisit} color="primary">
            Voltar
          </Button>
          <Button onClick={handleDeleteVisit} color="secondary">
            Cancelar data
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}