import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

const BASE_URL = 'http://localhost:3000';

const FontSize = {
  S: 8,
  M: 10,
  L: 12,
  XL: 20,
};
Font.register({
  family: 'STKaiti',
  fonts: [
    { src: `${BASE_URL}/fonts/STKaitiRegular.ttf`, fontWeight: 'normal' },
    { src: `${BASE_URL}/fonts/STKaitiBold.ttf`, fontWeight: 'semibold' },
    { src: `${BASE_URL}/fonts/STKaitiBlack.ttf`, fontWeight: 'bold' },
  ],
});
Font.register({
  family: 'STBaoLi',
  src: `${BASE_URL}/fonts/STBaoLi.ttf`,
});

const BORDER_WIDTH = 1;
const SEC_TAB_WIDTH = '48%';
const SEC_TYPE_WIDTH = '15%';
const SEC_PROP_WIDTH = '20%';
const SEC_NAME_WIDTH = '65%';

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 60,
    fontFamily: 'STKaiti',
  },
  h1: {
    fontFamily: 'STBaoLi',
    fontSize: FontSize.XL,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  info: {
    // 第一行个人信息
    fontSize: FontSize.M,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoCell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginRight: 20,
  },
  title: {
    fontFamily: 'STBaoLi',
  },
  section: {
    marginVertical: 10,
  },
});

const tstyles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: FontSize.M,

    border: `solid black`,
    borderTopWidth: BORDER_WIDTH,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 18,

    border: `solid black`,
    borderLeftWidth: BORDER_WIDTH,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100%',

    border: `solid black`,
    borderRightWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH,
  },
});

const sstyles = StyleSheet.create({
  semester: {
    fontWeight: 'bold',
    fontSize: FontSize.L,
    textAlign: 'center',
    marginBottom: 4,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 4,
    width: SEC_TAB_WIDTH,
    fontSize: FontSize.S,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
});

// 将 data 转化为 pdf
function MyDocument({ data }: { data: { user: any; overall: any[]; semesters: any } }) {
  const info = (
    <View style={styles.info}>
      <View style={styles.infoCell}>
        <Title>姓名：</Title>
        <DText style={{ fontSize: FontSize.M, maxWidth: 80 }}>{data.user.name}</DText>
      </View>
      <View style={styles.infoCell}>
        <Title>学号：</Title>
        <Text>{data.user.student_id}</Text>
      </View>
      <View style={styles.infoCell}>
        <Title>班级：</Title>
        <Text>{data.user.class_id}</Text>
      </View>
      <View style={[styles.infoCell, { marginRight: 0 }]}>
        <Title>院系：</Title>
        <DText style={{ fontSize: FontSize.M, maxWidth: 100 }}>{data.user.college}</DText>
      </View>
    </View>
  );
  const secsHeader = (
    <View style={[sstyles.row, { fontSize: FontSize.M }]}>
      <View style={[sstyles.cell, { width: SEC_NAME_WIDTH, textAlign: 'center' }]}>
        <Title>活动名称</Title>
      </View>
      <View style={[sstyles.cell, { width: SEC_TYPE_WIDTH }]}>
        <Title>类型</Title>
      </View>
      <View style={[sstyles.cell, { width: SEC_PROP_WIDTH }]}>
        <Title>属性</Title>
      </View>
    </View>
  );
  const sections = data.semesters.map((item: any) => (
    <Section key={item.semester} data={item} style={styles.section} />
  ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>第二课堂成绩单</Text>
        {info}
        <Table data={data.overall} />
        <View style={sstyles.container}>
          {secsHeader}
          {secsHeader}
        </View>
        {sections}
      </Page>
    </Document>
  );
}

function Title({ children }: any) {
  return <Text style={styles.title}>{children}</Text>;
}
function DText({ children, ...prop }: { children: string; [key: string]: any }) {
  let fontSize: number = prop.style?.fontSize || FontSize.S,
    maxWidth: number = prop.maxWidth || prop.style?.maxWidth || prop.style?.maxWidth;
  if (children.length > maxWidth / fontSize) {
    prop.style.fontSize = Math.min(fontSize, Math.floor(maxWidth / children.length));
  }
  return <Text {...prop}>{children}</Text>;
}

function BText({
  children,
  fontSize,
  ...props
}: {
  children: string;
  fontSize?: number;
  [key: string]: any;
}) {
  // 填充空格
  function getBlankWord(word: string) {
    return String(word)
      .replace(/./g, word => word + ' ')
      .trim();
  }

  // 缩进字间距
  function getLetterSpacing(fontSize: number) {
    return -0.15 * fontSize;
  }

  const size = fontSize || props.style?.fontSize || FontSize.S;

  return (
    <Text {...props} style={{ fontSize: size, letterSpacing: getLetterSpacing(size) }}>
      {getBlankWord(children)}
    </Text>
  );
}
function Table({ data }: { data: { category: string; count: number }[] }) {
  return (
    <View style={tstyles.table}>
      <View style={tstyles.row}>
        {/* 第一行 */}
        <View style={tstyles.cell}>
          <Title>活动类型</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[0].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[1].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[2].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[3].category}</Title>
        </View>
      </View>
      <View style={tstyles.row}>
        {/* 第二行 */}
        <View style={tstyles.cell}>
          <Title>活动数量</Title>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[0].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[1].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[2].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[3].count}</Text>
        </View>
      </View>
      <View style={tstyles.row}>
        {/* 第三行 */}
        <View style={tstyles.cell}>
          <Title>活动类型</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[4].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[5].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[6].category}</Title>
        </View>
        <View style={tstyles.cell}>
          <Title>{data[7].category}</Title>
        </View>
      </View>
      <View style={tstyles.row}>
        {/* 第四行 */}
        <View style={tstyles.cell}>
          <Title>活动数量</Title>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[4].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[5].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[6].count}</Text>
        </View>
        <View style={tstyles.cell}>
          <Text>{data[7].count}</Text>
        </View>
      </View>
    </View>
  );
}
function Section({
  data,
  style,
  ...props
}: {
  data: {
    semester: string;
    acts: { id: number; name: string; type: number | ''; category: string }[];
  };
  style?: any;
  [key: string]: any;
}) {
  const count = data.acts.length;

  function Row({
    data,
    style,
    ...props
  }: {
    data: { name: string; type: number | ''; category: string };
    style?: any;
  }) {
    return (
      <View {...props} style={[sstyles.row, style]}>
        <View style={[sstyles.cell, { width: SEC_NAME_WIDTH, textAlign: 'left' }]}>
          <BText>{data.name}</BText>
        </View>
        <View style={[sstyles.cell, { width: SEC_TYPE_WIDTH }]}>
          <Text>{data.type}</Text>
        </View>
        <View style={[sstyles.cell, { width: SEC_PROP_WIDTH }]}>
          <Text>{data.category}</Text>
        </View>
      </View>
    );
  }

  return (
    <View {...props} style={style}>
      <Text style={sstyles.semester}> {data.semester} </Text>
      <View style={sstyles.container}>
        {data.acts.map(act => (
          <Row data={act} key={act.id} />
        ))}
        {count % 2 == 0 && <Row data={{ name: '', type: '', category: '' }} />}
        <Row
          style={{ fontWeight: 'bold' }}
          data={{ name: '学期参与活动总量', type: count, category: '' }}
        />
      </View>
    </View>
  );
}

export default MyDocument;
