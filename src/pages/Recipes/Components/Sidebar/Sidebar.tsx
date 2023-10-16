import React, { useEffect, useState } from "react"
import "./Sidebar.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { firstFilterData, secondFilterData } from "./SidebarData"
import { motion } from "framer-motion"
import { fadeIn } from "../../../../utils/motion"

function Sidebar() {
  const [checkedList, setCheckedList] = useState<any[]>([])
  const [dataListFirst, setDataListFirst] = useState(firstFilterData)
  const [dataListSecond, setDataListSecond] = useState(secondFilterData)

  const FirstFilter = ({ title, titleButton, contentData }) => (
    <div
      style={{
        width: "100%",
      }}
      className="flexColStart"
    >
      <div
        style={{
          width: "50%",
        }}
        className="flexBetween"
      >
        <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>{title}</div>
        <button className="boderless-button" style={{ fontSize: "0.75rem", color: "red" }} onClick={() => handleClear()}>
          {titleButton}
        </button>
      </div>

      {contentData.map((data: any, index: any) => {
        return (
          <div key={data.id} style={{ width: "50%" }} className="flexBetween">
            <div>{data.name}</div>
            <input
              value={data.name}
              checked={data.checked}
              onChange={(e) => {
                handleCheck(e, index, null, 1)
              }}
              type="checkbox"
            ></input>
          </div>
        )
      })}
    </div>
  )

  const SecondFilter = ({ contentData }) => (
    <div
      style={{
        width: "100%",
      }}
      className="flexColStart"
    >
      {contentData.map((data, index) => {
        return (
          <div
            key={data.id}
            style={{
              width: "100%",
            }}
            className="flexColStart"
          >
            <div style={{ width: "50%" }} className="flexBetween">
              <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{data.name}</div>

              <div onClick={() => handleClick(data)}>{data.isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            <div className="flexColStart" style={{ gap: "10px", width: "50%" }}>
              {data.isOpen
                ? data.subMenu.map((data, subLevelIndex) => {
                    return (
                      <div key={data.id} className="flexBetween" style={{ width: "100%" }}>
                        <div>{data.name}</div>
                        <input value={data.name} checked={data.checked} onChange={(e) => handleCheck(e, index, subLevelIndex, 2)} type="checkbox"></input>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        )
      })}
    </div>
  )

  const handleClear = () => {
    setCheckedList([])
  }

  const handleCheck = (e, index, subLevelIndex?, data) => {
    //first layer is to define the checked true or false
    //second layer is to define which set of data should I modify ;)
    //for the second data list, i neeed to go through 1 more layer inside the array
    if (e.target.checked == false) {
      if (data == 1) {
        checkedList.splice(checkedList.indexOf(e.target.value), 1)
        const items = [...dataListFirst]
        const item = { ...items[index] }
        item.checked = false
        items[index] = item
        setDataListFirst(items)
      } else {
        checkedList.splice(checkedList.indexOf(e.target.value), 1)

        const items = [...dataListSecond]
        let item = { ...items[index] }
        let item2 = item.subMenu[subLevelIndex]
        item2.checked = false
        items[index].subMenu[subLevelIndex] = item2
        setDataListSecond(items)
      }
    } else {
      if (data == 1) {
        checkedList.push(e.target.value)
        const items = [...dataListFirst]
        let item = { ...items[index] }
        item.checked = true

        items[index] = item
        setDataListFirst(items)
      } else {
        checkedList.push(e.target.value)
        const items = [...dataListSecond]
        let item = { ...items[index] }
        let item2 = item.subMenu[subLevelIndex]
        item2.checked = true
        items[index].subMenu[subLevelIndex] = item2
        setDataListSecond(items)
      }
    }
    //refer to this, this is very useful
    // if (selectedData && selectedData) {
    // }
    // if (e.target.checked == true) {
    //   checkedList.push(e.target.value)
    //   const items = [...checkedState]
    //   let item = { ...items[newIndex] }
    //   item = true
    //   items[newIndex] = item
    //   setCheckedState(items)
    // } else {
    //   // const existed =
    //   checkedList.splice(checkedList.indexOf(e.target.value), 1)
    //   const items = [...checkedState]
    //   let item = items[newIndex]
    //   item = false
    //   items[newIndex] = item
    //   setCheckedState(items)
    // }
  }

  const handleClick = (e) => {
    const newFilter = dataListSecond.map((data) => {
      if (e.id === data.id) {
        return {
          ...data,
          isOpen: !data.isOpen,
        }
      } else {
        return {
          ...data,
        }
      }
    })
    setDataListSecond(newFilter as any)
  }
  return (
    <div className="sidebar flexColStart">
      <div style={{ fontSize: "2rem" }}>Recipes 👩‍🍳</div>
      <div
        style={{
          width: "100%",
        }}
        className="flexColStart"
      >
        <FirstFilter title="Filter By:" titleButton="Clear filter" contentData={dataListFirst} />
      </div>
      <div
        style={{
          width: "100%",
        }}
        className="flexColStart"
      >
        <SecondFilter contentData={dataListSecond} />
      </div>
    </div>
  )
}

export default Sidebar
