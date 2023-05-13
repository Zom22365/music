import logo from './logo.svg';
import './App.css';
import sing from './LaAnh-PhamLichBMZ-8811329.mp3'
import singImg from './1677931592531.jpg'
import img1 from './1666713183455.jpg'
import img2 from './1673597034955.jpg'
import img3 from './1516076284633.jpg'
import img4 from './1657336738467.jpg'
import img5 from './1673597089876.jpg'

function App() {
  const data = [
    {
      id: 1,
      name: "Anh Vẫn Là Anh (Single)",
      auth: "Ưng Đại Vệ",
      img: img1
    },
    {
      id: 2,
      name: "Cứ Ngỡ Là Anh (Single)",
      auth: "Chu Bin",
      img: img2
    },
    {
      id: 3,
      name: "Chúng Ta Là Anh Em (Single)",
      auth: "Ngọc Turbo",
      img: img3
    },
    {
      id: 4,
      name: "Mãi Mãi Là Anh Em (Single)",
      auth: "Ban Bê",
      img: img4
    },
    {
      id: 5,
      name: "Em Từng Là Ánh Sáng (Single)",
      auth: "Chu Bin",
      img: img5
    }
  ]
  return (
    <div className="App" style={{ textAlign: 'start', padding: '0px 24px' }}>
      <h1 style={{ textAlign: 'start' }}>Là Anh - Phạm Lịch, BMZ</h1>
      <div style={{ background: '#000', padding: '12px' }}>
        <div>
          <img style={{ width: '100px', marginBottom: '12px' }} src={singImg} />
        </div>
        <div>
          <audio style={{ width: '100%' }} controls>
            <source src={sing} type='audio/mpeg' />
          </audio>
        </div>
      </div>
      <div style={{ border: '1px solid rgb(217 215 215)', padding: '24px', marginTop: '12px' }}>
        <h2 style={{ borderBottom: '1px solid rgb(217 215 215)', paddingBottom: '5px' }}>Lời bài hát: Là Anh</h2>
        <p style={{ fontSize: '16px', lineHeight: '24px' }}>
          Cùng bên nhau mai sau
          <br />Là điều ước muốn lớn nhất
          <br />Bàn tay anh đưa ra
          <br />Tựa là nắng ấm lấp lánh
          <br />Này không gian bao la
          <br />Thuộc về cho riêng hai ta
          <br />Cho tình yêu trăm năm nở hoa
          <br />Biết bao giấc mơ ngọt ngào
          <br />Đã từng khóc xuyên qua đêm
          <br />Tỉnh mộng gối đã ướt đẫm
          <br />Chợt anh như hè qua
          <br />Ngập tràn ấm áp nắng sớm
          <br />Dù hai ta già đi
          <br />Và dù hai ta già đi
          <br />Vẫn còn đây bóng dáng ngày ấy
          <br />Một điều xa xưa
          <br />Ta từng thề nguyện qua rồi
          <br />Cùng đi cùng đi ngàn năm
          <br />Về sau mình vẫn có nhau
          <br />Tô màu lên trải hoa
          <br />Tình yêu chúng mình
          <br />Đập tan màn sương mù kia
          <br />Còn vương vấn không buông bàn tay
          <br />Đắm đuối đắm đuối mê say
          <br />Là anh là anh cùng em
          <br />Vượt qua màn đêm tối kia
          <br />Kiên cường khi đạp qua
          <br />Từng con sóng xô
          <br />Ngoài khơi biển xanh trời cao này
          <br />Rộng lớn phiêu du cùng nhau
          <br />Bỏ lại đau đớn phía sau
          <br />Cùng bên nhau mai sau
          <br />Là điều ước muốn lớn nhất
          <br />Bàn tay anh đưa ra
          <br />Tựa là nắng ấm lấp lánh
          <br />Này không gian bao la
          <br />Thuộc về cho riêng hai ta
          <br />Cho tình yêu trăm năm nở hoa
          <br />Biết bao giấc mơ ngọt ngào
          <br />Đã từng khóc xuyên qua đêm
          <br />Tỉnh mộng gối đã ướt đẫm
          <br />Chợt anh như hè qua
          <br />Ngập tràn ấm áp nắng sớm
          <br />Dù hai ta già đi
          <br />Và dù hai ta già đi
          <br />Vẫn còn đây bóng dáng ngày ấy
          <br />Một điều xa xưa
          <br />Ta từng thề nguyện qua rồi
          <br />Cùng đi cùng đi ngàn năm
          <br />Về sau mình vẫn có nhau
          <br />Tô màu lên trải hoa
          <br />Tình yêu chúng mình
          <br />Đập tan màn sương mù kia
          <br />Còn vương vấn không buông bàn tay
          <br />Đắm đuối đắm đuối mê say
          <br />Là anh là anh cùng em
          <br />Vượt qua màn đêm tối kia
          <br />Kiên cường khi đạp qua
          <br />Từng con sóng xô
          <br />Ngoài khơi biển xanh trời cao này
          <br />Rộng lớn phiêu du cùng nhau
          <br />Bỏ lại đau đớn phía sau
          <br />Cùng đi cùng đi ngàn năm
          <br />Về sau mình vẫn có nhau
          <br />Tô màu lên trải hoa
          <br />Tình yêu chúng mình
          <br />Đập tan màn sương mù kia
          <br />Còn vương vấn không buông bàn tay
          <br />Đắm đuối đắm đuối mê say
          <br />Là anh là anh cùng em
          <br />Vượt qua màn đêm tối kia
          <br />Kiên cường khi đạp qua
          <br />Từng con sóng xô
          <br />Ngoài khơi biển xanh trời cao này
          <br />Rộng lớn phiêu du cùng nhau
          <br />Bỏ lại đau đớn phía sau
        </p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h1>Playlist | album </h1>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'space-between' }}>
          {
            data.map((sing) => {
              return (
                <div key={sing.id} style={{ width: '30%' }} >
                  <img src={sing.img} style={{ width: '100%' }} />
                  <strong style={{ display: 'block', fontSize: '20px' }}>{sing.name}</strong>
                  <div>{sing.auth}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
