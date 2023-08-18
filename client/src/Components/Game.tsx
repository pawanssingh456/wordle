import { Button, ButtonGroup, Grid } from '@mui/material'
import { useState } from 'react';

const todayWord = "BLAME"
function Game() {
    const [found, setFound] = useState(false)
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
        if (!found) {
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
    }


    function clearValue() {
        if (!found) {
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
    }


    function checkWord() {
        if (!found) {
            const rows = [null, row1, row2, row3, row4, row5, row6];
            const eventOccureds = [null, setEventOccurred1, setEventOccurred2, setEventOccurred3, setEventOccurred4, setEventOccurred5, setEventOccurred6];
            const row = Math.floor(counter / 5);
            const rowToCheck = rows[row];
            const eventOccured = eventOccureds[row]

            let isAllCorrect = 0

            const result = rowToCheck?.map((item, index) => {
                if (todayWord[index] === item) {
                    isAllCorrect++;
                    return { value: "correct", letter: item };
                } else if (todayWord.includes(item)) {
                    return { value: "present", letter: item };
                } else {
                    return { value: "absent", letter: item };
                }
            }) || [];

            result.forEach((item, index) => {
                const element = document.getElementById(`r${row}${index + 1}`);
                const letter = document.getElementById(item.letter);
                if (element) {
                    element.setAttribute("data-state", item.value);
                }
                if (letter) {
                    letter.setAttribute("data-state", item.value);
                }
            });

            if (eventOccured) {
                eventOccured(true)
            }

            if (isAllCorrect === 5) {
                setFound(true)
            }
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
                    <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ paddingBottom: "10px" }}>
                        <Button onClick={() => { updateValue("Q") }} id="Q" data-state="empty">Q</Button>
                        <Button onClick={() => { updateValue("W") }} id="W" data-state="empty">W</Button>
                        <Button onClick={() => { updateValue("E") }} id="E" data-state="empty">E</Button>
                        <Button onClick={() => { updateValue("R") }} id="R" data-state="empty">R</Button>
                        <Button onClick={() => { updateValue("T") }} id="T" data-state="empty">T</Button>
                        <Button onClick={() => { updateValue("Y") }} id="Y" data-state="empty">Y</Button>
                        <Button onClick={() => { updateValue("U") }} id="U" data-state="empty">U</Button>
                        <Button onClick={() => { updateValue("I") }} id="I" data-state="empty">I</Button>
                        <Button onClick={() => { updateValue("O") }} id="O" data-state="empty">O</Button>
                        <Button onClick={() => { updateValue("P") }} id="P" data-state="empty">P</Button>
                    </ButtonGroup>
                </div>
                <div className='Keyboard-Row'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ paddingBottom: "10px" }}>
                        <Button onClick={() => { updateValue("A") }} id="A" data-state="empty">A</Button>
                        <Button onClick={() => { updateValue("S") }} id="S" data-state="empty">S</Button>
                        <Button onClick={() => { updateValue("D") }} id="D" data-state="empty">D</Button>
                        <Button onClick={() => { updateValue("F") }} id="F" data-state="empty">F</Button>
                        <Button onClick={() => { updateValue("G") }} id="G" data-state="empty">G</Button>
                        <Button onClick={() => { updateValue("H") }} id="H" data-state="empty">H</Button>
                        <Button onClick={() => { updateValue("J") }} id="J" data-state="empty">J</Button>
                        <Button onClick={() => { updateValue("K") }} id="K" data-state="empty">K</Button>
                        <Button onClick={() => { updateValue("L") }} id='L' data-state="empty">L</Button>
                    </ButtonGroup>
                </div>
                <div className='Keyboard-Row'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={checkWord}>ENTER</Button>
                        <Button onClick={() => { updateValue("Z") }} id="Z" data-state="empty">Z</Button>
                        <Button onClick={() => { updateValue("X") }} id="X" data-state="empty">X</Button>
                        <Button onClick={() => { updateValue("C") }} id="C" data-state="empty">C</Button>
                        <Button onClick={() => { updateValue("V") }} id="V" data-state="empty">V</Button>
                        <Button onClick={() => { updateValue("B") }} id="B" data-state="empty">B</Button>
                        <Button onClick={() => { updateValue("N") }} id="N" data-state="empty">N</Button>
                        <Button onClick={() => { updateValue("M") }} id="M" data-state="empty">M</Button>
                        <Button onClick={clearValue}>BACK</Button>
                    </ButtonGroup>
                </div>

            </div>
        </div>
    )
}

export default Game
