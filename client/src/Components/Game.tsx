import { Button, ButtonGroup, Grid } from '@mui/material'
import { useState } from 'react';

const todayWord = "BLAME"
function Game() {
    const [counter, setCounter] = useState(0)
    const [row1, setRow1] = useState<string[]>([]);
    const [eventOccurred1, setEventOccurred1] = useState(false);
    const [row2, setRow2] = useState<string[]>([]);
    const [eventOccurred2, setEventOccurred2] = useState(false);
    const [row3, setRow3] = useState<string[]>([]);
    const [eventOccurred3, setEventOccurred3] = useState(false);
    const [row4, setRow4] = useState<string[]>([]);
    const [eventOccurred4, setEventOccurred4] = useState(false);
    const [row5, setRow5] = useState<string[]>([]);
    const [eventOccurred5, setEventOccurred5] = useState(false);
    const [row6, setRow6] = useState<string[]>([]);
    const [eventOccurred6, setEventOccurred6] = useState(false);

    function updateValue(element: string) {
        let dataToSetOn;
        let counterIncrement = 1;

        if (counter >= 0 && counter < 5 && !eventOccurred1) {
            dataToSetOn = setRow1;
        } else if (counter >= 5 && counter < 10 && !eventOccurred2) {
            dataToSetOn = setRow2;
        } else if (counter >= 10 && counter < 15 && !eventOccurred3) {
            dataToSetOn = setRow3;
        } else if (counter >= 15 && counter < 20 && !eventOccurred4) {
            dataToSetOn = setRow4;
        } else if (counter >= 20 && counter < 25 && !eventOccurred5) {
            dataToSetOn = setRow5;
        } else if (counter >= 25 && counter < 30 && !eventOccurred6) {
            dataToSetOn = setRow6;
        } else {
            counterIncrement = 0;
        }

        setCounter(counter + counterIncrement)

        if (dataToSetOn) {
            return dataToSetOn(oldArray => [...oldArray, element]);
        }
    }


    function clearValue() {
        let dataToRemove;

        if (counter >= 0 && counter <= 5 && !eventOccurred1) {
            dataToRemove = setRow1;
            // counter--;
            setCounter(counter - 1)
        } else if (counter >= 6 && counter <= 10 && !eventOccurred2) {
            dataToRemove = setRow2;
            setCounter(counter - 1)
        } else if (counter >= 11 && counter <= 15 && !eventOccurred3) {
            dataToRemove = setRow3;
            setCounter(counter - 1)
        } else if (counter >= 16 && counter <= 20 && !eventOccurred4) {
            dataToRemove = setRow4;
            setCounter(counter - 1)
        } else if (counter >= 21 && counter <= 25 && !eventOccurred5) {
            dataToRemove = setRow5;
            setCounter(counter - 1)
        } else if (counter >= 26 && counter <= 31 && !eventOccurred6) {
            dataToRemove = setRow6;
            setCounter(counter - 1)
        }

        if ((counter === -1 || counter === 1) && dataToRemove === setRow1) {
            setCounter(0)
        }

        if (dataToRemove) {
            return dataToRemove(prevArray => prevArray.slice(0, -1));
        }
    }


    function checkWord() {
        const rows = [null, row1, row2, row3, row4, row5, row6];
        const eventOccureds = [null, setEventOccurred1, setEventOccurred2, setEventOccurred3, setEventOccurred4, setEventOccurred5, setEventOccurred6];
        const row = Math.floor(counter / 5);
        const rowToCheck = rows[row];
        const eventOccured = eventOccureds[row]

        const result = rowToCheck?.map((item, index) => {
            if (todayWord[index] === item) {
                return { item: "correct" };
            } else if (todayWord.includes(item)) {
                return { item: "present" };
            } else {
                return { item: "absent" };
            }
        }) || [];

        result.forEach((item, index) => {
            const element = document.getElementById(`r${row}${index + 1}`);
            if (element) {
                element.setAttribute("data-state", item.item);
            }
        });

        if (eventOccured) {
            eventOccured(true)
        }
    }


    return (
        <div className='Wordle'>
            <div className='Board' style={{ paddingBottom: "30px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingBottom="10px"
                >
                    <div className='Tile' id='r11' data-state="empty">{row1[0]}</div>
                    <div className='Tile' id='r12' data-state="empty">{row1[1]}</div>
                    <div className='Tile' id='r13' data-state="empty">{row1[2]}</div>
                    <div className='Tile' id='r14' data-state="empty">{row1[3]}</div>
                    <div className='Tile' id='r15' data-state="empty">{row1[4]}</div>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingBottom="10px"
                >
                    <div className='Tile' id='r21' data-state="empty">{row2[0]}</div>
                    <div className='Tile' id='r22' data-state="empty">{row2[1]}</div>
                    <div className='Tile' id='r23' data-state="empty">{row2[2]}</div>
                    <div className='Tile' id='r24' data-state="empty">{row2[3]}</div>
                    <div className='Tile' id='r25' data-state="empty">{row2[4]}</div>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingBottom="10px"
                >
                    <div className='Tile' id='r31' data-state="empty">{row3[0]}</div>
                    <div className='Tile' id='r32' data-state="empty">{row3[1]}</div>
                    <div className='Tile' id='r33' data-state="empty">{row3[2]}</div>
                    <div className='Tile' id='r34' data-state="empty">{row3[3]}</div>
                    <div className='Tile' id='r35' data-state="empty">{row3[4]}</div>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingBottom="10px"
                >
                    <div className='Tile' id='r41' data-state="empty">{row4[0]}</div>
                    <div className='Tile' id='r42' data-state="empty">{row4[1]}</div>
                    <div className='Tile' id='r43' data-state="empty">{row4[2]}</div>
                    <div className='Tile' id='r44' data-state="empty">{row4[3]}</div>
                    <div className='Tile' id='r45' data-state="empty">{row4[4]}</div>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingBottom="10px"
                >
                    <div className='Tile' id='r51' data-state="empty">{row5[0]}</div>
                    <div className='Tile' id='r52' data-state="empty">{row5[1]}</div>
                    <div className='Tile' id='r53' data-state="empty">{row5[2]}</div>
                    <div className='Tile' id='r54' data-state="empty">{row5[3]}</div>
                    <div className='Tile' id='r55' data-state="empty">{row5[4]}</div>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <div className='Tile' id='r61' data-state="empty">{row6[0]}</div>
                    <div className='Tile' id='r62' data-state="empty">{row6[1]}</div>
                    <div className='Tile' id='r63' data-state="empty">{row6[2]}</div>
                    <div className='Tile' id='r64' data-state="empty">{row6[3]}</div>
                    <div className='Tile' id='r65' data-state="empty">{row6[4]}</div>

                </Grid>
            </div>
            <div className='Keyboard'>
                <div className='Keyboard-Row'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => { updateValue("Q") }}>Q</Button>
                        <Button onClick={() => { updateValue("W") }}>W</Button>
                        <Button onClick={() => { updateValue("E") }}>E</Button>
                        <Button onClick={() => { updateValue("R") }}>R</Button>
                        <Button onClick={() => { updateValue("T") }}>T</Button>
                        <Button onClick={() => { updateValue("Y") }}>Y</Button>
                        <Button onClick={() => { updateValue("U") }}>U</Button>
                        <Button onClick={() => { updateValue("I") }}>I</Button>
                        <Button onClick={() => { updateValue("O") }}>O</Button>
                        <Button onClick={() => { updateValue("P") }}>P</Button>
                    </ButtonGroup>
                </div>
                <div className='Keyboard-Row'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => { updateValue("A") }}>A</Button>
                        <Button onClick={() => { updateValue("S") }}>S</Button>
                        <Button onClick={() => { updateValue("D") }}>D</Button>
                        <Button onClick={() => { updateValue("F") }}>F</Button>
                        <Button onClick={() => { updateValue("G") }}>G</Button>
                        <Button onClick={() => { updateValue("H") }}>H</Button>
                        <Button onClick={() => { updateValue("J") }}>J</Button>
                        <Button onClick={() => { updateValue("K") }}>K</Button>
                        <Button onClick={() => { updateValue("L") }}>L</Button>
                    </ButtonGroup>
                </div>
                <div className='Keyboard-Row'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={checkWord}>ENTER</Button>
                        <Button onClick={() => { updateValue("Z") }}>Z</Button>
                        <Button onClick={() => { updateValue("X") }}>X</Button>
                        <Button onClick={() => { updateValue("C") }}>C</Button>
                        <Button onClick={() => { updateValue("V") }}>V</Button>
                        <Button onClick={() => { updateValue("B") }}>B</Button>
                        <Button onClick={() => { updateValue("N") }}>N</Button>
                        <Button onClick={() => { updateValue("M") }}>M</Button>
                        <Button onClick={clearValue}>BACK</Button>
                    </ButtonGroup>
                </div>

            </div>
        </div>
    )
}

export default Game