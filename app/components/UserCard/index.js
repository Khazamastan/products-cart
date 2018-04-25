import UserImage from "../UserImage";
import CardInfo from "../CardInfo";
import React from 'react';

const UserCard = props => {
	const {strAlbumThumb, strTrack, strAlbum, 	strArtistThumb, strArtist } = props;
	switch(props.viewType){
		case "Track":
			return (
				<li className={"ui-item"}>
					<CardInfo Name={strTrack} {...props} />
				</li>
			);
			break;
		case "Album":
			return (
				<li className="ui-item">
					<div className="profile">
						<div className="img-wrapper">
							<UserImage imageURL={strAlbumThumb || "data:image/png;base64,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"} imageAlt={strAlbum}/>
						</div>
					</div>
					<CardInfo Name={strAlbum} {...props} />
				</li>
			);
			break;
		default:
			return (
				<li className="ui-item">
					<div className="profile">
						<div className="img-wrapper">
							<UserImage imageURL={strArtistThumb || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD////+/v5TU1PS0tLa2tpZWVnW1tZOTk5JSUn4+Pj7+/vLy8vz8/Pn5+fPz8+qqqqYmJjv7++fn5+ysrLk5OSMjIxzc3O8vLySkpI7OzuGhoZfX1/l5eVBQUErKytra2sVFRV7e3u4uLglJSUeHh5lZWUZGRnDw8MNDQ2tra1wcHAyMjLjp/+rAAAT10lEQVR4nMVdh3arOBANinHD2Bgb9+cex+3/v28pkpBAXePsPWffJg4IXWs0mibxFbgCKf6Uo/opisP7fLZ4fW8O19/H4+vxc9gMurfldnoZjSNydYAUjfl26guyMRbRuJNsB4cvBU6b7iIZjZ17YNapjzBMJ9PuVcWNw/uYhLFzN7Sdcmcoa76z/n4YsyP42U1HZRNQ4loDkmEQZM+dNbkat0sxlMAcESDD9Nn3oFdhN0/hOlQBgGGpONP5wJtehUGSgkorBMMgCLcnTb9/9q+ZUrEyOG1D/15RADCMkr26x+dRVurKpSHDHP1LcQPIQHoxRPmaHU9/dd2d48vX5gzzQZ+OYWTVcwwz4bhc+7fXeUH1zhpffLFhmOMGYgw4Mqy+3fTc6tXmmEywOTYnn73wTaElw6+vLYBm9WCYbhv9eW/vbI8m9HP8wdiaYc4x9pVVZylF02ZfJiiojG7co5j85RfbZENzS67GaeY5Ge0ZFq5AEKx4y2x3F/SDXkLm07cDwxwJXnP/kGEQdtkeHNYlhVYfKKER/sBiueDQzUTNf45hMOTU/vuJJDYIvSzBH8wcGX59TYeinpiQtrVLi0Z7G+bRp0T07ApPctGiHABkvVww2PRcR9GWYYDYFeLxVF3cI5e9yt6hYOTOMLeMhm4UbaU0ZAfwnCpVQEQHAPfNZbmocZi4ELRiiPiZNAjVwZogoKY2HkOks881mLkoVasxjG/M4xLdo1BALyeGgMZE1+I2tF//jRkWa8RP/ayuiV1MlWkHf3D0ZPj127GejGYMS9l4Mk+atq4Q3bYil6/w392XC4onsTmgGXI69Bq2FiPhI6mp7epdiHAs+IEzzKcgY8Xc0raECh9JdecRf9ABYPj1HVstjQYMUe7opoyO2Jk/gCjTAf49FnbZFu9aB+h1gaFNE3JegXn4lsYWcQA/sI+kivAbWgyiEcOGLbI0bn9BbsnwB1ABOYvFX8ew0KItY2tkSnFV31HB1bto4U4EVNsTPcO6mxSbSHMXAVWmTsEoJYi/4s9QQLAyn0wYpmTeLfAHc0FjjpgH2Bb0YigcwQKZsmUiP4jOO9DlAuMeSEWJ6Zxal+bLhMTh2RkyfOHryXKRATJUqAP2cxXDfAQnstbvJmKKAhKuumI/OYZZLjB6gZ+U5gTlEc63mbKhMp5iyhtpiy4IDZZ8FcMgVuRSFvIbmRaoVPbwR0dQhie1PlAyLG6MlF+4QeOMmz/HrS5UTdrjmurkVKppitvU+dydkTNKvqRpebVXMErSC103FFKq+7oven61EfPCDHvKJh2w1YmSfAzFCyGDU2Qgp8Tn3eNr/0Ez1Gp16RgarFxbAzkl39NPXH1v0Y+ySRdoEsYyhio1StHTU0zJtWMcFYbyLmq8ZYHUMksk1jSRoRMw0ItpRJb4yrtAwRGc4ddN2Q0hQ2OVNxfdzYOMGfEFmkk5CMxUHRBLqWlw+qTP0ZI0KglGPZUNOiJTdKDNsJhaxom+pXYmJvhKkuq+f4LhXtENAUMrSdJGaIlzsse/++UuZJjKuyFiaOPiDARtcqDGO/59qC1OcYJcTkXz0CoZrZzlAWOZ4lQ38s1diPFtwzDRt8dCrWwQzcaQ3MVN2ZozprKp2GSI6jXaEEdhu3V7ZGVd4U8+sVwUkJk2DYb599CuAtJAaRgiapmS5QIwGMWhK+lGk6FDrOgwVDIkgRAy1tLAiC8kYZvWPHRQBDNFMqjWzLC5CwE2QlexZZc6eaiZat1HxIYnGxQ8U91yzIXdaDCMTKtcOcimQAWSl/uHf4f3LjDewsIXjiFyTdK2lQ2pKIjGIQmGVMvFMOsqm/KB0LL54nvl2PQ1bjRd8kOj6Y6Ridlkvt7tP2PSYIjWZl5KnfPs21bD6exzY2XRjQbDoXuIIayzXcUPHetVFQZxW045hh6lEt80W1FUvjmWWfpj3VanLMPIpcKV4Em/vfh/Gr8S7ZWZZaiNHyoxrGTUsxVfzJsMuRXfb6Haeks6BPpYGQjH0Ks28guvd2CJeleMpAyRJk2hR2F4SvL0j81tm9wnvbA3GT0Xtz1oFpHHrjENmTG09QvbeAo9o0d31mtW4MRhcvyUedqMZ9QMLV17AU4Cz2twobt9q4I7RPYrDFe+QiPGWswwf6aTza3GNVGXT0XJJx7aUKaEIWiVRIUfRZE7fmg+kG/w5074BYMyBF+mk0ibvCz+HCXQtvhZzBABq7fbPxElIQT7w/zAN/+FhxBWSB93Y37FFz6CHUb+4YRwcx+aFwaCEls5w/zSGDSIeuaaxwyHkBN+bVrYxwAyinriNBxmCFlAMLXeil0MI2SRBiemmCFcVWRRotEkqC9VRqBVGpyYYoZw6ZILz49suMxGs/PyuL8tz9N7KOAtKtR1xputEvkqHwWX1BOMYBBfbryyfHSFxg6cPmcjUhVDMK+V32lSGqLZVrQWnJb8rqmynMjfNMZYNRjqy59McW6IaK7C5OtAt9OUVDB1sG0xBApDH6KGiA7VX92Zk9VixgJFIAdNhlDJEt41U9TfUqy461GQAlk3WYMhUH1EMwpksoovOM0EphFWDYYw4t9vEDQzqLtszRaCqpl6NRjCONs9hl0ucaam5oD3IiFq3fuzsMEQoNFW9MDclu7zFD3DkYN1Y8dQwTDS32cAfg238fm63J0eGdTNcjUOAvbkCswQxCJkanWR7drN5v1cc5jX41zsdBcMQcx67iwZ23NaRvWtyGXtGkw70phQwRDCouHqha1z5Y+6f8jWshksJjhlIqk2QTB7IHpsF+3tywX7BZmr0/dyLjyHiDg081nl4/sfs8ZuoXHzVJhdoYYba352yZhh00S6Oh/KKuYvr8wvBbODBjnFfF6sjOl1zWA6igPifbYYRpMZPtnwu5yHEM4hW1Q2dGqBtWnVYvre3kXeJV4i0L+EMd8rhvYHVLVwYDWZm5fHeZZSX+dn+RxjSREhK0WTwXepaQAKzbi9z26u2JWVc6F2P+0SEv8Qzb10tG2r8GoMAcx51quQisRmfbmvplL+rLHVdnYG65FENIv/DcNpVxi0rxgCxA7Y/fESNbEnDCYS1c1u9+NzmfiUNEnEDmWKXGQlpQC+EzsNxY7Ka1h/42Kb9cC0wSirV5JF1WhxI4d/G9+3ylh2NYYAiRFx5xgcuSEQLydsCLCKbnYTUeEvOdokHqnZFagY+hcX7JnnC5Plv/wcGgrDs6yo33JjbIQ3g4kQhzMjp7ZieHSnhsGWegs187wRORQGf9mYTZYSdnx4ufpjcjQ1UiqG/nkfNooudFT4VA0Sm+aJOvqPD6NcbW3i8xVD/xhG7d6Lre5GhS1Cwpmx1uU30GRqm32oGPrHKOtdJWL/tbGTld939Nhs9psc+1bBVnVt9eEwTFxGAp6heDlsbzZlrhpUIX0krkMvPxpfXo5FhZ9gKJLSc2t0GLNsQBSK2A1KVwuPxBjUPGTNEdH+wncrncE8s703rI4kdWaeviuULl0y3RNauXz9Nb/zSMQw/ycKE4DkPtR6yFbLCQ3vM8+AMxRF+/vGlzPMnu/KLvW3aa7MPBNHykbM6VyNA0UGVDJxA/c13I6MiiFAoQkzz8RxtlMYRLQOPObMScqw+DecwZaIVwwBCj1SZhAlhnxdH9HjBZAwHIZPY2PMGBVDgN3VbLGcLL68m5S2W685Kcg8BD8xo0DFEKAGYqqdiAV++7d+e+X+A4YATXOG50t/PYuPMHwvqrlXrRYQGbt6wbOWCXCGP+ciEF7p62oMIfaPc6kVOxsSliGNx9UMA5Co/o1laJfLgmP4PR1FdOXhGB692+bzo3Zb7vFq4clww7+1oMEQIrvGHalk1Vl/htfXPGsGPHiGEBnSPvcAm/CdJ8M+jcchOUOQ/ePMRlkURBZy6sEwn3jS1C/HEKQycc+MoVUK0ZHh+1xloGRHmHMMYapNOvVMyB9qXmblwLCYeBG+jYtSIhlDkMMM++xMsLB295YM+9OeUDSrh0dkVvIMYYovZ3z5lun5F0+Ls+r2OAMlFs1hZ90tTlYQMASqImfWxKIHZtbbigy6juHP+RK3pBFRsv/mtzK/1hcyBCqC5s9xydWN3lffU1WvZHh9JZlQoeBA+KVO/YoZQu1bSxoPj3ThgzN914GCYX/dY1JzTUQTPukqZAi3rat1knioCkpsmDNkJQw3i1HrnIQ6tBqF01YoVMIQ6lScA7/jv+jHRCaqmxWvfFsMH8eL+IQmHAifL0WpXwlDsAOMN5wir2pdQkEFwWHbCViCTYbX4zNj2DSRrrYyF00yD4dge/Nuok4Ne+vvOsh0IpVoPGqGg7Xo70xVgsrdkzAEqhIucGzxw8mjcTi5X1ajcByLx6ZieFrfU+auRjMonO00/rqMIeC+qq5g5xqvB8V5pophN5CUy+SieTcJhMsYpoBbSA9ur7urGfJfTdlWepdOPEOGwRGOoeOLmYQMCwxDm6NupAxhz+vQHTVozBBlyc4uEC5lCHzGWNf0jbd1rpBjWH4W38/2Xo+EIYLIBPOYGm2VZZROg+F94bZxVzaGINkLHu87/u7UWJH0Ki+lznsRpVL6iaPwNvOo4Xhzw5f/F83fDR//gwyDIwSpBt4z1Qtvx2V5DDkz5/MM4Q/GKDFIxMfDjkn1D+kSYYg+xvATh5tU+DnPe+xYpp0ZU6wMzHCgYPiRc6gpHod9f/faDd7Xhs8DzHCrYBjDH3lvAmCG4lgbnuvAb9cwBKymobEiIcPPHLWtAyxDWlEgZPipY5rVaDL0ktI3pSOah/4ntjkBlOFcwxDQ1TcHJMNNoGMIsEHIGpAMVxqGCP0fMxFQ02wYh008hoBhRXOAMXwcVoGOYQB8XpQRmiu+C8PDK+nE/MHpUoZ/vyZ6MzwtRLluGUOQWkw7eDLsVsd5tiKQ0jEM0r+2Tr3m4a7X7L+WIfyb0XTwYPjdk4dJ5GOIIIrAbODOcFbdaMvwz5WNK8Mum3pjZ2H1s4oh3IFURnBk2H7DZPwv7HQyUkygYIgsX6XjCzddeuflM71vSfD497hKdWP4t+api4//IJmR8oz7aNKsHd9mGoZ/eii3A0PuzePoIgqhLapiPSlDwFMGtXBgiF9TUAab75KuVvEuGUMUpB97VUoLZO+aOUOyykcoiI/qxqUMIY9plOOw739/D462DGmdZ95LXdpUztD5fSyGuB6TSUqyUzzDQMMQv5yr+EffR/k8DD6Tx6hwEtRiGDPc0RtMjkpQMIxgD95lUDoDrVoEU4a/tSVjUsilGkPVS7k9sOvQ9hswY7iiNxsddiG2vCng38WxV7wN3Yghfmu9sZ5QM4TXNjNV5tuIYUa6ZqjrlZqmAGgmY8Nk2FCzhshsHm7JIJi+qkLLEPK0/S3i5CNHnIW9MBtHJUUjhjTZejR8qJYhst1qJ0fjCOV0dSZvKsnXxkJBGjCkhzUZawj9GAYIqAqFvpywEMjo3vzizj2supUMQ9yC+ULWlWsaOk8QRFDjUb/BO//fSlQHtJ6QLkkZEhvdYufyTr1aVIgB9o6HjISOJHVOla2vYkhqySzevHWTSSlHE3lnpCakUb0zoGJIdLFFNHBpxDBAnurmghssqr510VgFQ/rKXwuhmpox9Fw01nWjehNCwZC0YxMLvDeya0K2JTysmz62s8wOJlUwHOFO2mwsyPj3rskZ+hT2pVRETSRBwXCIu2KR4ywSirr1EDO02W7HY05r94xMQDnDB/6LzdGaxeFGZgwLZE57+MgaZmrGy6MYZAunTRI3X4YNx7Ds4tDlmBca9zN0BuQMybF9FhGkctjNGSKXcP+LTMKhYfBOzpAUrFl4rVMrhmU/Q9sjt/6Rb8dUPcjnIWFo/jU/YmuG1i9mOpOvxtgM0TM0XyyqY23txrCQVJu9JyR2OzQeez1DYyn9qd66YMOwJBmMzc1UuoPd3GCQMrySskrjZQvXntgyLBTOxTTkT/Y+W1TJyxguaIjHdM/3Evsz9mNosW5kmKGFQUQOSeEZbsK6A4ZvcjjFgdMYksdMTLzsDTEELTKuM8Fq8Tvnnm2m7HpkhrgxzIdxptc45EBIm9AyORKMOatjy76Jz3RVntN7FDFvBcPin1irPogzYHNcGgnaU4bL1mYGE8OUOf3AiSF5lKZ+irxRwyKYRY8YxLZZlzltg0LvhLHH2WoZineg4Q1ZY6VDhO+MLVZQevZ8yXA3Ee4q0oaD52yvneYhg0yuVknNtc007JEvMGd4HIkfqX1/Roe73Jdh/o0mEr1KMn0WnuUbD1jO8JwFkqmC1DWit5S/zZdhKQ4T4XJAtj5YRB2edbi2ldugKI6YlEvOM7+RSwApGbYeIFU/43Xb8sRmt4XJdhiaKLgSEkE9t18vYMdQceHwfm7slLd3d+YSvdZ+Xm5zCKpMCslutWDDUBGpKtsd9hZspMPa3dnLNLf4eXd+bnzPU6Fk+2saHr0prVAimsbYN5ToTjnGq9e+mB3X7lr4YpYSsAyrLdijWbnDnGzvMHUGFuazAj9N8PA2gMeQSMnw33NJ7BND3+nXkl+dKpAdd17BkaFJbyJykZFr8RC9ysILPr6F4QMIQyNlavGucuMOlHD0D00uojlRk0ii5tUPHvjcGFKYbE6dWSy+lvgThgbOgNOBL0b4E4aamXgaVfnhz8CBoUtXVH7kUrpYg+BPGOZK56iUUPtOmOMPpDQoKUgiitv4wwT/iGGBkcAZ2I4/ze/vGJaHYXLGzeP2ND2IyAslQ9FTiEmChJ+w8UvBjwH/Kb0jXZ0H79PjMDi2nAFqZMoaMf20+cf/AIcJ9lnRDbsxAAAAAElFTkSuQmCC"} imageAlt={strArtist}/>
						</div>
					</div>
					<CardInfo Name={strArtist} {...props} />
				</li>
			);
	}
};

export default UserCard;