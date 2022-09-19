import * as React from "react";

const Diagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={811}
    height={411}
    viewBox="-0.5 -0.5 811 411"
    style={{
      backgroundColor: "#ffffff",
      padding: "35px",
      border: "1px solid grey",
    }}
    {...props}
  >
    <defs>
      <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="a">
        <stop
          offset="0%"
          style={{
            stopColor: "#f5f5f5",
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#b3b3b3",
          }}
        />
      </linearGradient>
      <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="b">
        <stop
          offset="0%"
          style={{
            stopColor: "#fff",
            stopOpacity: 0.9,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#fff",
            stopOpacity: 0.1,
          }}
        />
      </linearGradient>
    </defs>
    <rect
      x={160}
      y={40}
      width={650}
      height={370}
      rx={55.5}
      ry={55.5}
      fill="#dae8fc"
      stroke="#6c8ebf"
      pointerEvents="none"
    />
    <switch transform="translate(451.5 2.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={88}
        height={117}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 35,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
            }}
          >
            <p
              style={{
                lineHeight: "140%",
                fontSize: 35,
              }}
            >
              <b
                style={{
                  fontSize: 35,
                }}
              >
                <font
                  style={{
                    fontSize: 35,
                  }}
                >
                  {"Node"}
                </font>
              </b>
            </p>
          </div>
        </div>
      </foreignObject>
      <text
        x={44}
        y={76}
        textAnchor="middle"
        fontSize={35}
        fontFamily="Helvetica"
      >
        {"[Not supported by viewer]"}
      </text>
    </switch>
    <path
      d="M192.5 225h33.67v-75h25.59"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m257.76 150-8 4 2-4-2-4Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="M192.5 225h33.67v75h25.59"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m257.76 300-8 4 2-4-2-4Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path stroke="#000" opacity={0.25} d="M129.5 178h65v100h-65z" />
    <path
      fill="#ffe6cc"
      stroke="#d79b00"
      pointerEvents="none"
      d="M127.5 175h65v100h-65z"
    />
    <switch transform="translate(129.5 193.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={61}
        height={63}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 18,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 61,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Ingress Nginx Service"}
          </div>
        </div>
      </foreignObject>
      <text
        x={31}
        y={41}
        textAnchor="middle"
        fontSize={18}
        fontFamily="Helvetica"
      >
        {"[Not supported by viewer]"}
      </text>
    </switch>
    <path
      d="M80 225h39.26"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m125.26 225-8 4 2-4-2-4Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <switch transform="translate(1.5 202.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={68}
        height={40}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 35,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
            }}
          >
            <font
              style={{
                fontSize: 25,
              }}
            >
              {"Traffic"}
            </font>
          </div>
        </div>
      </foreignObject>
      <text
        x={34}
        y={38}
        textAnchor="middle"
        fontSize={35}
        fontFamily="Helvetica"
      >
        {"[Not supported by viewer]"}
      </text>
    </switch>
    <path
      fill="#ffe6cc"
      stroke="#d79b00"
      pointerEvents="none"
      d="M260 100h70v100h-70z"
    />
    <switch transform="translate(261.5 132.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={34}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 15,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 66,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"ClusterIP Service"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={25}
        textAnchor="middle"
        fontSize={15}
        fontFamily="Helvetica"
      >
        {"ClusterIP Service"}
      </text>
    </switch>
    <path
      fill="#f8cecc"
      stroke="#b85450"
      pointerEvents="none"
      d="M330 250h130v40H330z"
    />
    <switch transform="translate(341.5 258.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={107}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 108,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Deployment"}
          </div>
        </div>
      </foreignObject>
      <text
        x={54}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"Deployment"}
      </text>
    </switch>
    <path
      d="M460 305h35.33v-17.5h26.43"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m527.76 287.5-8 4 2-4-2-4Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <rect
      x={330}
      y={290}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      stroke="#000"
      transform="translate(2 3)"
      opacity={0.25}
    />
    <rect
      x={330}
      y={290}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      fill="url(#a)"
      stroke="#b3b3b3"
      pointerEvents="none"
    />
    <path
      d="M335.65 289q-6.65 0-6.65 6.65V302q66 9 132 0v-6.35q0-6.65-6.65-6.65Z"
      fill="url(#b)"
      pointerEvents="none"
    />
    <switch transform="translate(361.5 293.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 67,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"api pod"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"api pod"}
      </text>
    </switch>
    <path
      d="M460 335h35.33V162.5h26.77"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m528.1 162.5-8 4 2-4-2-4Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <rect
      x={330}
      y={320}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      stroke="#000"
      transform="translate(2 3)"
      opacity={0.25}
    />
    <rect
      x={330}
      y={320}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      fill="url(#a)"
      stroke="#b3b3b3"
      pointerEvents="none"
    />
    <path
      d="M335.65 319q-6.65 0-6.65 6.65V332q66 9 132 0v-6.35q0-6.65-6.65-6.65Z"
      fill="url(#b)"
      pointerEvents="none"
    />
    <switch transform="translate(361.5 323.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 67,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"api pod"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"api pod"}
      </text>
    </switch>
    <path
      fill="#ffe6cc"
      stroke="#d79b00"
      pointerEvents="none"
      d="M260 250h70v100h-70z"
    />
    <switch transform="translate(261.5 282.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={34}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 15,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 66,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"ClusterIP Service"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={25}
        textAnchor="middle"
        fontSize={15}
        fontFamily="Helvetica"
      >
        {"ClusterIP Service"}
      </text>
    </switch>
    <path
      fill="#f8cecc"
      stroke="#b85450"
      pointerEvents="none"
      d="M330 100h130v40H330z"
    />
    <switch transform="translate(341.5 108.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={107}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 108,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Deployment"}
          </div>
        </div>
      </foreignObject>
      <text
        x={54}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"Deployment"}
      </text>
    </switch>
    <rect
      x={330}
      y={140}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      stroke="#000"
      transform="translate(2 3)"
      opacity={0.25}
    />
    <rect
      x={330}
      y={140}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      fill="#cdeb8b"
      stroke="#67ab9f"
      pointerEvents="none"
    />
    <switch transform="translate(351.5 143.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={86}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 87,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"client pod"}
          </div>
        </div>
      </foreignObject>
      <text
        x={43}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"client pod"}
      </text>
    </switch>
    <rect
      x={330}
      y={170}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      stroke="#000"
      transform="translate(2 3)"
      opacity={0.25}
    />
    <rect
      x={330}
      y={170}
      width={130}
      height={30}
      rx={4.5}
      ry={4.5}
      fill="#cdeb8b"
      stroke="#67ab9f"
      pointerEvents="none"
    />
    <switch transform="translate(351.5 173.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={86}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 87,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"client pod"}
          </div>
        </div>
      </foreignObject>
      <text
        x={43}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"client pod"}
      </text>
    </switch>
    <path
      d="M665.33 325v20-3.24"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      d="m665.33 347.76-4-8 4 2 4-2Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      pointerEvents="none"
    />
    <path
      fill="#1ba1e2"
      stroke="#006eaf"
      pointerEvents="none"
      d="M600 275h130v50H600z"
    />
    <path
      d="M599 274v21q66 15 132 0v-21Z"
      fill="url(#b)"
      pointerEvents="none"
    />
    <switch transform="translate(608.5 289.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={112}
        height={20}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 18,
            fontFamily: "Helvetica",
            color: "#fff",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 113,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            <b
              style={{
                fontSize: 17,
              }}
            >
              {"Postgres pod"}
            </b>
          </div>
        </div>
      </foreignObject>
      <text
        x={56}
        y={19}
        fill="#fff"
        textAnchor="middle"
        fontSize={18}
        fontFamily="Helvetica"
      >
        {"[Not supported by viewer]"}
      </text>
    </switch>
    <path
      fill="#f8cecc"
      stroke="#b85450"
      pointerEvents="none"
      d="M600 250h130v25H600z"
    />
    <switch transform="translate(611.5 251.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={107}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 108,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Deployment"}
          </div>
        </div>
      </foreignObject>
      <text
        x={54}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"Deployment"}
      </text>
    </switch>
    <path
      fill="#ffe6cc"
      stroke="#d79b00"
      pointerEvents="none"
      d="M530 250h70v75h-70z"
    />
    <switch transform="translate(531.5 270.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={34}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 15,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 66,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"ClusterIP Service"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={25}
        textAnchor="middle"
        fontSize={15}
        fontFamily="Helvetica"
      >
        {"ClusterIP Service"}
      </text>
    </switch>
    <path
      fill="#ffe6cc"
      stroke="#d79b00"
      pointerEvents="none"
      d="M530 125h70v75h-70z"
    />
    <switch transform="translate(531.5 145.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={66}
        height={34}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 15,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 66,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"ClusterIP Service"}
          </div>
        </div>
      </foreignObject>
      <text
        x={33}
        y={25}
        textAnchor="middle"
        fontSize={15}
        fontFamily="Helvetica"
      >
        {"ClusterIP Service"}
      </text>
    </switch>
    <path
      fill="#d80073"
      stroke="#a50040"
      pointerEvents="none"
      d="M600 150h130v50H600z"
    />
    <path
      d="M599 149v21q66 15 132 0v-21Z"
      fill="url(#b)"
      pointerEvents="none"
    />
    <switch transform="translate(622.5 164.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={84}
        height={20}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 18,
            fontFamily: "Helvetica",
            color: "#fff",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 85,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            <b
              style={{
                fontSize: 17,
              }}
            >
              {"Redis pod"}
            </b>
          </div>
        </div>
      </foreignObject>
      <text
        x={42}
        y={19}
        fill="#fff"
        textAnchor="middle"
        fontSize={18}
        fontFamily="Helvetica"
      >
        {"[Not supported by viewer]"}
      </text>
    </switch>
    <path
      fill="#f8cecc"
      stroke="#b85450"
      pointerEvents="none"
      d="M600 125h130v25H600z"
    />
    <switch transform="translate(611.5 126.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={107}
        height={22}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 20,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 108,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Deployment"}
          </div>
        </div>
      </foreignObject>
      <text
        x={54}
        y={21}
        textAnchor="middle"
        fontSize={20}
        fontFamily="Helvetica"
      >
        {"Deployment"}
      </text>
    </switch>
    <path
      fill="#ff8"
      stroke="#cc0"
      pointerEvents="none"
      d="M600 350h130v40H600z"
    />
    <switch transform="translate(608.5 359.5)">
      <foreignObject
        style={{
          overflow: "visible",
        }}
        pointerEvents="none"
        width={113}
        height={20}
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "inline-block",
            fontSize: 18,
            fontFamily: "Helvetica",
            color: "#000",
            lineHeight: 1.2,
            verticalAlign: "top",
            width: 114,
            whiteSpace: "nowrap",
            overflowWrap: "normal",
            textAlign: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "inline-block",
              textAlign: "inherit",
              textDecoration: "inherit",
              whiteSpace: "normal",
            }}
          >
            {"Postgres PVC"}
          </div>
        </div>
      </foreignObject>
      <text
        x={57}
        y={19}
        textAnchor="middle"
        fontSize={18}
        fontFamily="Helvetica"
      >
        {"Postgres PVC"}
      </text>
    </switch>
  </svg>
);

export default Diagram;
