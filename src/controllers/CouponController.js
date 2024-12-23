import { CouponModel } from '~/models/CouponModel';
import { StatusCodes } from 'http-status-codes';

async function getCoupons(req, res) {
  try {
    const coupons = await CouponModel.getCoupons(req.params.id);

    const updatedCoupons = coupons.map(coupon => {
      const { name, ...rest } = coupon;
      return {
        ...rest,
        code: name
      };
    });

    res.status(StatusCodes.OK).json(updatedCoupons);
  } catch (error) {
    throw new Error(error);
  }
};

async function createCoupon(req, res) {
  try {
    await CouponModel.createCoupon(req.body);
    res.status(StatusCodes.CREATED).json('Created');

  } catch (error) {
    throw new Error(error);
  }
}

async function editCoupon(req, res) {
  try {
    let editedCoupon = await CouponModel.editCoupon(req.params.id, req.body);

    res.status(StatusCodes.OK).json(editedCoupon);

  } catch (error) {
    throw new Error(error);
  }
}

async function deleteCoupon(req, res) {
  try {
    await CouponModel.deleteCoupon(req.params.id);
    res.status(StatusCodes.OK).json('Deleted');

  } catch (error) {
    throw new Error(error);
  }
}

async function decreaseQuantity(req, res) {
  try {
    const { id } = req.body;
    await CouponModel.decreaseQuantity(id);

    res.status(StatusCodes.OK).json('Coupon used');
  } catch (error) {
    throw new Error(error);
  }
}

export const CouponController = {
  getCoupons,
  createCoupon,
  editCoupon,
  deleteCoupon,
  decreaseQuantity
};
